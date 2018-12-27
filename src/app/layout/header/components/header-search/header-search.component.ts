import { isPlatformBrowser } from '@angular/common';
import { environment } from './../../../../../environments/environment';
import { Router, ActivatedRoute } from '@angular/router';
import { SearchActions } from './../../../../home/reducers/search.actions';
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
    @Inject(PLATFORM_ID) private platformId: any) { }

  ngOnInit() {}

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
      this.router.navigate(['/s'], { queryParams: { 'q': keyword } });
      this.setKeywordToLocalStorage(keyword);
    }
  }

  onUrlChange(urlParams: Object) {
    this.store.dispatch(
      this.searchActions.getproductsByKeyword(urlParams)
    );
  }

  loadPage() {
    this.onUrlChange(this.queryParams)
  }

  onFoucs() {
    this.showGo = true;
  }

  onFoucsOut() {
    this.showGo = false;
  }

  setKeywordToLocalStorage(keyword) {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('keyword', keyword);
    }
  }
}
