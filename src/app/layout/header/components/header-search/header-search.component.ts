import { ProductService } from './../../../../core/services/product.service';
import { Router, ActivatedRoute } from '@angular/router';
import { SearchActions } from './../../../../home/reducers/search.actions';
import { AppState } from './../../../../interfaces';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { URLSearchParams } from '@angular/http'
@Component({
  selector: 'app-header-search',
  templateUrl: './header-search.component.html',
  styleUrls: ['./header-search.component.scss']
})
export class HeaderSearchComponent implements OnInit {
  queryParams: any;

  constructor(
    private store: Store<AppState>,
    private searchActions: SearchActions,
    private router: Router,
    private activatedRouter: ActivatedRoute
  ) {
    this.activatedRouter.queryParams
      .subscribe(params => {
        this.queryParams = params
      });
  }

  ngOnInit() {

  }
  onSearch(keyword: string) {
    if (keyword !== '') {
      keyword = keyword.trim();
      const search = new URLSearchParams();
      search.set('q[name_cont]', keyword)
      this.store.dispatch(this.searchActions.getproductsByKeyword(search.toString()));
      this.router.navigate(['/products'], { queryParams: { 'q[name_cont_all]': keyword } });
      this.store.dispatch(this.searchActions.clearCategeoryLevel());
    }
  }
}
