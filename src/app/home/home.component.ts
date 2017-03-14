import { Taxonomy } from './../core/models/taxonomy';
import { environment } from './../../environments/environment';
import { ProductActions } from './../product/actions/product-actions';
import { AppState } from './../interfaces';
import { getProducts, getTaxonomies } from './../product/reducers/selectors';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Rx';
import { Component, OnInit } from '@angular/core';
import { Product } from '../core/models/product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  products$: Observable<any>;
  taxonomies$: Observable<any>;
  products: Product[] = [];
  taxonomies: Taxonomy[] = [];

  constructor(private store: Store<AppState>, private actions: ProductActions) {
    // Get all products for the product list component
    this.store.dispatch(this.actions.getAllProducts());
    this.store.dispatch(this.actions.getAllTaxonomies());
    this.products$ = this.store.select(getProducts);
    this.taxonomies$ = this.store.select(getTaxonomies);
    this.products$.subscribe(data => {
      this.products = data;
    });

    this.taxonomies$.subscribe(data => {
      this.taxonomies = data;
    });
  }

  ngOnInit() { }

  getProductImageUrl(url) {
    return environment.API_ENDPOINT + url;
  }
}
