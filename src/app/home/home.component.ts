import { ProductService } from './../core/services/product.service';
import { SearchActions } from './reducers/search.actions';
import { getSelectedTaxonIds, getProductsByKeyword, getChildTaxons, categeoryLevel, taxonomiByName } from './reducers/selectors';
import { Taxonomy } from './../core/models/taxonomy';
import { environment } from './../../environments/environment';
import { ProductActions } from './../product/actions/product-actions';
import { AppState } from './../interfaces';
import { getProducts, getTaxonomies, showAllProducts } from './../product/reducers/selectors';
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
      <app-categories
        [taxonomiList]="taxonomies$ | async"
        (onSelected)= "OnCategeorySelected($event)"
        (showAll)="showAll()"
        [isFilterOn]= "isFilterOn"
        [categoryLevel]= "categoryLevel$ | async" >
      </app-categories>
      <br>
      <app-brand-filter [taxonomiList]="brands$ | async" [isFilterOn]= "isFilterOn"></app-brand-filter>
      </div>
      <div class="col-md-9">
        <app-content
          [productsList]="products">
         <!-- [taxonIds]="selectedTaxonIds$ | async"  -->
        </app-content>
      </div>
    </div>
  `,
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  // products$: Observable<any>;
  taxonomies$: Observable<any>;
  brands$: Observable<any>;
  selectedTaxonIds$: Observable<number[]>;
  categoryLevel$: Observable<any>;
  products: any;
  isProducts = false;
  isFilterOn = false;
  gopal = false;

  constructor(
    private store: Store<AppState>,
    private actions: ProductActions,
    private searchActions: SearchActions,
    private productService: ProductService) {
    // Get all products for the product list component
    this.store.dispatch(this.actions.getAllProducts(1));
    this.store.dispatch(this.actions.getAllTaxonomies());
    // this.products$ = this.store.select(getProducts);
    this.taxonomies$ = this.store.select(getTaxonomies);
    this.brands$ = this.store.select(getTaxonomies);
    this.selectedTaxonIds$ = this.store.select(getSelectedTaxonIds);
    this.store.select(getProductsByKeyword)
      .subscribe(data => {
        this.products = data
        if (this.products.count) { this.isProducts = true } else { this.isProducts = false }
      })
  }

  ngOnInit() { }
  OnCategeorySelected(category) {
    // TODO: Here taxonomies_id is hardcoded for now.
    this.store.dispatch(this.searchActions.getChildTaxons('5', category.id));
    this.taxonomies$ = this.store.select(getChildTaxons)
    this.categoryLevel$ = this.store.select(categeoryLevel)
    // ToDo: Here Brands are hardcoded For now.
    this.store.dispatch(this.searchActions.getTaxonomiesByName('Brands', category.name));
    this.brands$ = this.store.select(taxonomiByName)
    this.isFilterOn = true
  }
  showAll() {
    this.isFilterOn = false
  }
}
