import { ActivatedRoute } from '@angular/router';
import { AppState } from './../../../interfaces';
import { Store } from '@ngrx/store';
import { SearchActions } from './../../reducers/search.actions';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { URLSearchParams } from '@angular/http'
import { getChildTaxons } from '../../reducers/selectors';


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  @Input() taxonomiList;
  @Input() isFilterOn;
  @Input() categoryLevel;

  @Output() onSelected = new EventEmitter<Object>();
  @Output() showAll = new EventEmitter<Object>();

  queryParams: any;
  isItemSelected: any;
  brands: any;
  constructor(
    private searchActions: SearchActions,
    private store: Store<AppState>,
    private router: ActivatedRoute
  ) {
    this.router.queryParams
      .subscribe(params => {
        this.queryParams = params
      });
  }

  ngOnInit() {
    if ('id' in this.queryParams) {
      this.catgeoryFilter();
    }
  }
  showAllCategory() {
    window.location.reload();
    this.isFilterOn = false
    this.showAll.emit()
  }

  /**
   *
   *
   * @memberof CategoriesComponent
   */
  catgeoryFilter() {
    const search = new URLSearchParams();
    if ('page' in this.queryParams) {
      search.set('page', this.queryParams.page);
    }
    search.set('id', this.queryParams.id);
    this.store.dispatch(this.searchActions.getProducsByTaxon(search.toString()));
  }

  emitSelection() {
    this.catgeoryFilter()
    this.onSelected.emit({ id: this.queryParams.id, name: this.queryParams['q[name_cont]'] });
  }
}
