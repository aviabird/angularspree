import { HttpParams } from '@angular/common/http';
import { isPlatformBrowser } from '@angular/common';
import { environment } from './../../../../../environments/environment';
import { Router, ActivatedRoute } from '@angular/router';
import { SearchActions } from './../../../../search/reducers/search.actions';
import { AppState } from './../../../../interfaces';
import { Store } from '@ngrx/store';
import { Renderer2, PLATFORM_ID, Inject } from '@angular/core';
import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy
} from '@angular/core';

@Component({
  selector: 'app-header-search',
  templateUrl: './header-search.component.html',
  styleUrls: ['./header-search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderSearchComponent implements OnInit {
  queryParams: any;
  @Input() isMobile;
  @Input() isSearchopen;
  @Output() onSubCatClicked: EventEmitter<boolean> = new EventEmitter<boolean>();
  searchPlaceholder = environment.config.header.searchPlaceholder;
  showGo = false;

  constructor(
    private store: Store<AppState>,
    private searchActions: SearchActions,
    private router: Router,
    private activatedRouter: ActivatedRoute,
    private renderer: Renderer2,
    @Inject(PLATFORM_ID) private platformId: any,
  ) {
    this.activatedRouter.queryParams.subscribe(params => {
      this.queryParams = params;
      this.loadPage();
    });
  }

  ngOnInit() { }

  showsearch() {
    this.isSearchopen = !this.isSearchopen;
    this.onSubCatClicked.emit(false);
    if (isPlatformBrowser(this.platformId)) {
      if (this.isSearchopen) {
        this.renderer.addClass(document.body, 'issearchopen');
      } else {
        this.renderer.removeClass(document.body, 'issearchopen');
      }
    }
  }

  onSearch(keyword: string) {
    if (keyword !== '') {
      keyword = keyword.trim();
      let search = new HttpParams()
        .set('q[name_cont_any]', keyword);

      if ('page' in this.queryParams) {
        search = search.set('page', this.queryParams.page);
      }
      if ('q[s]' in this.queryParams) {
        search = search.set('q[s]', this.queryParams['q[s]']);
      }
      this.store.dispatch(
        this.searchActions.getproductsByKeyword(search.toString())
      );
      this.router.navigate(['/search'], {
        queryParams: {
          'q[name_cont_any]': keyword,
          page: this.queryParams.page,
          'q[s]': this.queryParams['q[s]']
        }
      });
      this.store.dispatch(this.searchActions.clearCategeoryLevel());
    }
  }

  catgeoryFilter() {
    let search = new HttpParams()
      .set('id', this.queryParams.id)
      .set('page', this.queryParams.page);
    if ('q[s]' in this.queryParams) {
      search = search.set('q[s]', this.queryParams['q[s]']);
    }
    this.store.dispatch(
      this.searchActions.getProductsByTaxon(search.toString())
    );
  }

  // TODO
  // Refactor me 🙏
  loadPage() {
    if ('q[name_cont_any]' in this.queryParams && 'page' in this.queryParams) {
      this.onSearch(this.queryParams['q[name_cont_any]']);
    } else if ('q[name_cont_any]' in this.queryParams) {
      this.onSearch(this.queryParams['q[name_cont_any]']);
    }

    if ('id' in this.queryParams && 'page' in this.queryParams) {
      this.catgeoryFilter();
    } else if ('id' in this.queryParams && 'q[s]' in this.queryParams) {
      this.catgeoryFilter();
    } else if ('id' in this.queryParams) {
      this.catgeoryFilter();
    }

    if ('q[s]' in this.queryParams && 'q[name_cont_any]' in this.queryParams) {
      this.onSearch(this.queryParams['q[name_cont_any]']);
    }
  }

  onFoucs() {
    this.showGo = true;
  }

  onFoucsOut() {
    this.showGo = false;
  }
}
