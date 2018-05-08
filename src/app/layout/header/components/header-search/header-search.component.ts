import { Router } from '@angular/router';
import { SearchActions } from './../../../../home/reducers/search.actions';
import { AppState } from './../../../../interfaces';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-search',
  templateUrl: './header-search.component.html',
  styleUrls: ['./header-search.component.scss']
})
export class HeaderSearchComponent implements OnInit {
  values = '';
  constructor(
    private store: Store<AppState>,
    private searchActions: SearchActions,
    private router: Router
  ) { }

  ngOnInit() {
  }
  onSearch(keyword: string) {
    if (keyword !== '') {
      keyword = keyword.trim();
      this.store.dispatch(this.searchActions.getproductsByKeyword(keyword));
      this.router.navigate(['/products']);
      localStorage.setItem('searchKeyword', keyword);
    }
  }
}
