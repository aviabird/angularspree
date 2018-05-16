import { ProductService } from './../../../core/services/product.service';
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
  @Input() level;

  @Output() onSelected = new EventEmitter<String>();
  queryParams: any;
  isItemSelected: any;

  constructor(
    private searchActions: SearchActions,
    private store: Store<AppState>,
    private router: ActivatedRoute,
    private productService: ProductService
  ) {
    this.router.queryParams
      .subscribe(params => {
        this.queryParams = params
      });
  }

  ngOnInit() {
    this.store.dispatch(this.searchActions.clearCategeoryLevel());
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

  emitSelection(selection: string) {
    this.catgeoryFilter()
    this.onSelected.emit(selection);
  }


}

