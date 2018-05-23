import { ProductService } from './../../../../core/services/product.service';
import { Router, ActivatedRoute } from '@angular/router';
import { SearchActions } from './../../../../home/reducers/search.actions';
import { AppState } from './../../../../interfaces';
import { Store } from '@ngrx/store';
import { Component, OnInit, Input } from '@angular/core';
import { URLSearchParams } from '@angular/http'
@Component({
  selector: 'app-header-search',
  templateUrl: './header-search.component.html',
  styleUrls: ['./header-search.component.scss']
})
export class HeaderSearchComponent implements OnInit {
  queryParams: any;
  @Input() devicewidth;
  flag: any = false;

  constructor(
    private store: Store<AppState>,
    private searchActions: SearchActions,
    private router: Router,
    private activatedRouter: ActivatedRoute
  ) {
    this.activatedRouter.queryParams
      .subscribe(params => {
        this.queryParams = params
        this.loadPage()
      });
  }

  ngOnInit() {

  }

  showsearch() {
    this.flag = !this.flag;
    this.loadPage();
  }
  onSearch(keyword: string) {
    if (keyword !== '') {
      keyword = keyword.trim();
      const search = new URLSearchParams();
      search.set('q[name_cont]', keyword)
      if ('page' in this.queryParams) {
        search.set('page', this.queryParams.page)
      }
      this.store.dispatch(this.searchActions.getproductsByKeyword(search.toString()));
      this.router.navigate(['/search'], { queryParams: { 'q[name_cont_all]': keyword, 'page': this.queryParams.page } });
      this.store.dispatch(this.searchActions.clearCategeoryLevel());
    }
  }

  catgeoryFilter() {
    const search = new URLSearchParams();
    search.set('id', this.queryParams.id);
    search.set('page', this.queryParams.page)
    this.store.dispatch(this.searchActions.getProducsByTaxon(search.toString()));
  }

  loadPage() {
    if ('q[name_cont_all]' in this.queryParams && 'page' in this.queryParams) {
      this.onSearch(this.queryParams['q[name_cont_all]'])
    } else if ('q[name_cont_all]' in this.queryParams) {
      this.onSearch(this.queryParams['q[name_cont_all]'])
    }

    if ('id' in this.queryParams && 'page' in this.queryParams) {
      this.catgeoryFilter()
    } else if ('id' in this.queryParams) {
      this.catgeoryFilter()
    }
  }
}
