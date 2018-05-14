import { SearchActions } from './reducers/search.actions';
import { getSelectedTaxonIds, getProductsByKeyword } from './reducers/selectors';
import { Taxonomy } from './../core/models/taxonomy';
import { environment } from './../../environments/environment';
import { ProductActions } from './../product/actions/product-actions';
import { AppState } from './../interfaces';
import { getProducts, getTaxonomies } from './../product/reducers/selectors';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { Product } from '../core/models/product';

@Component({
  selector: 'app-home',
  template: `
    <!--<app-breadcrumb [taxonomies]="taxonomies$ | async"></app-breadcrumb> -->
    <br><br>
    <div class=row>
      <div class="col-md-3" *ngIf="isProducts">
      <!-- <app-taxons [taxonomies]="taxonomies$ | async"></app-taxons> -->
      <app-categories [taxonomiList]="taxonomies$ | async"></app-categories>
      <br>
      <app-brand-filter [taxonomiList]="taxonomies$ | async"></app-brand-filter>
      </div>
      <div class="col-md-9">
        <app-content
          [productsList]="products"
          [taxonIds]="selectedTaxonIds$ | async" >
        </app-content>
      </div>
    </div>
  `,
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  // products$: Observable<any>;
  taxonomies$: Observable<any>;
  selectedTaxonIds$: Observable<number[]>;
  products: any;
  isProducts = false;

  constructor(private store: Store<AppState>, private actions: ProductActions, private searchActions: SearchActions) {
    // Get all products for the product list component
    // this.store.dispatch(this.actions.getAllProducts());
    this.store.dispatch(this.actions.getAllTaxonomies());
    // this.products$ = this.store.select(getProducts);
    this.taxonomies$ = this.store.select(getTaxonomies);
    this.selectedTaxonIds$ = this.store.select(getSelectedTaxonIds);
    this.store.select(getProductsByKeyword)
      .subscribe(data => {
        this.products = data
        if (this.products.count) { this.isProducts = true } else { this.isProducts = false }
      })
  }

  ngOnInit() { }
}
