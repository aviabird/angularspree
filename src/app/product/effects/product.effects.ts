import { SearchActions } from './../../home/reducers/search.actions';
import { Product } from './../../core/models/product';
import { ProductActions } from './../actions/product-actions';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';

import { ProductService } from './../../core/services/product.service';
import { Action } from '@ngrx/store';


@Injectable()
export class ProductEffects {
  constructor(private actions$: Actions,
    private productService: ProductService,
    private productActions: ProductActions,
    private searchActions: SearchActions
  ) { }

  // tslint:disable-next-line:member-ordering
  @Effect()
  GetAllProducts$: Observable<Action> = this.actions$
    .ofType(ProductActions.GET_ALL_PRODUCTS)
    .switchMap((action: any) => this.productService.getProducts())
    .map((data: any) => this.productActions.getAllProductsSuccess({ products: data }));

  // tslint:disable-next-line:member-ordering
  @Effect()
  GetAllTaxonomies$: Observable<Action> = this.actions$
    .ofType(ProductActions.GET_ALL_TAXONOMIES)
    .switchMap((action: any) => this.productService.getTaxonomies())
    .map((data: any) => this.productActions.getAllTaxonomiesSuccess({ taxonomies: data }));

  // tslint:disable-next-line:member-ordering
  @Effect()
  GetProductDetail$: Observable<Action> = this.actions$
    .ofType(ProductActions.GET_PRODUCT_DETAIL)
    .switchMap((action: any) => this.productService.getProduct(action.payload))
    .map((data: any) => this.productActions.getProductDetailSuccess(data));

  // tslint:disable-next-line:member-ordering
  @Effect()
  GetProductsByKeyword$: Observable<Action> = this.actions$
    .ofType(SearchActions.GET_PRODUCTS_BY_KEYWORD)
    .switchMap((action: any) => this.productService.getproductsByKeyword(action.payload))
    .map((data: any) => this.searchActions.getProducsByKeywordSuccess({ products: data }))

  // tslint:disable-next-line:member-ordering
  @Effect()
  GetProductsByTaxons$: Observable<Action> = this.actions$
    .ofType(SearchActions.GET_PRODUCTS_BY_TAXON)
    .switchMap((action: any) => this.productService.getProducts_by_taxon(action.payload))
    .map((data: any) => this.searchActions.getProducsByKeywordSuccess({ products: data }))
}

