import { ActivatedRoute } from '@angular/router';
import { AppState } from './../../../interfaces';
import { Store } from '@ngrx/store';
import { SearchActions } from './../../reducers/search.actions';
import { Component, OnInit, Input } from '@angular/core';
import { URLSearchParams } from '@angular/http'

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  @Input() taxonomiList;
  queryParams: any;

  constructor(
    private searchActions: SearchActions,
    private store: Store<AppState>,
    private router: ActivatedRoute) {
    this.router.queryParams
      .subscribe(params => {
        this.queryParams = params
      });
  }

  ngOnInit() {

  }

  /**
   * 
   * 
   * @memberof CategoriesComponent
   */
  catgeoryFilter() {
    const search = new URLSearchParams();
    search.set('id', this.queryParams.id);
    this.store.dispatch(this.searchActions.getProducsByTaxon(search.toString()));
  }
}

