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
    private searchActions: SearchActions
  ) { }

  ngOnInit() {
  }
  onSearch(keyword: string) {
    if (keyword !== '') {
      this.store.dispatch(this.searchActions.getproductsByKeyword(keyword));
    }
  }

}
