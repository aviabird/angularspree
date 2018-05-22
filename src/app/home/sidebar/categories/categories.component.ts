import { ProductActions } from './../../../product/actions/product-actions';
import { ProductService } from './../../../core/services/product.service';
import { ActivatedRoute } from '@angular/router';
import { AppState } from './../../../interfaces';
import { Store } from '@ngrx/store';
import { SearchActions } from './../../reducers/search.actions';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { URLSearchParams } from '@angular/http'
import { getChildTaxons } from '../../reducers/selectors';
import { debug } from 'util';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  @Input() taxonomiList;
  @Input() isFilterOn;
  @Input() categoryLevel;
  brands: any;


  @Output() onSelected = new EventEmitter<Object>();
  @Output() showAllProducts = new EventEmitter<Object>();
  queryParams: any;
  isItemSelected: any;

  constructor(
    private searchActions: SearchActions,
    private store: Store<AppState>,
    private router: ActivatedRoute,
    private productService: ProductService,
    private productActions: ProductActions,
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
  showAllProduct() {
    this.showAllProducts.emit()
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

  emitSelection() {
    this.catgeoryFilter()
    this.onSelected.emit({ id: this.queryParams.id, name: this.queryParams['q[name_cont]'] });
  }
}

