import { map, switchMap } from 'rxjs/operators';
import { SearchActions } from './../../home/reducers/search.actions';
import { Product } from './../../core/models/product';
import { ProductActions } from './../actions/product-actions';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { ProductService } from './../../core/services/product.service';
import { Action } from '@ngrx/store';

@Injectable()
export class ProductEffects {
  constructor(
    private actions$: Actions,
    private productService: ProductService,
    private productActions: ProductActions,
    private searchActions: SearchActions
  ) { }

  // tslint:disable-next-line:member-ordering
  @Effect()
  GetAllProducts$: Observable<Action> = this.actions$
    .ofType(ProductActions.GET_ALL_PRODUCTS)
    .pipe(
      switchMap((action: any) =>
        this.productService.getProducts(action.payload)
      ),
      map((data: any) =>
        this.productActions.getAllProductsSuccess({ products: data })
      )
    );

  // tslint:disable-next-line:member-ordering
  @Effect()
  GetAllTaxonomies$: Observable<Action> = this.actions$
    .ofType(ProductActions.GET_ALL_TAXONOMIES)
    .pipe(
      switchMap((action: any) => this.productService.getTaxonomies()),
      map((data: any) =>
        this.productActions.getAllTaxonomiesSuccess({ taxonomies: data })
      )
    );

  // tslint:disable-next-line:member-ordering
  @Effect()
  GetProductDetail$: Observable<Action> = this.actions$
    .ofType(ProductActions.GET_PRODUCT_DETAIL)
    .pipe(
      switchMap((action: any) =>
        this.productService.getProduct(action.payload)
      ),
      map((product: Product) =>
        this.productActions.getProductDetailSuccess({ product })
      )
    );

  // tslint:disable-next-line:member-ordering
  @Effect()
  GetProductsByKeyword$: Observable<Action> = this.actions$
    .ofType(SearchActions.GET_PRODUCTS_BY_KEYWORD)
    .pipe(
      switchMap((action: any) =>
        this.productService.getproductsByKeyword(action.payload)
      ),
      map(({ products, pagination }) =>
        this.searchActions.getProducsByKeywordSuccess({ products, pagination })
      )
    );

  // tslint:disable-next-line:member-ordering
  @Effect()
  GetProductsByTaxons$: Observable<Action> = this.actions$
    .ofType(SearchActions.GET_PRODUCTS_BY_TAXON)
    .pipe(
      switchMap((action: any) =>
        this.productService.getProductsByTaxon(action.payload)
      ),
      map(({ products, pagination }) =>
        this.searchActions.getProducsByKeywordSuccess({ products, pagination })
      )
    );

  // tslint:disable-next-line:member-ordering
  @Effect()
  GetChildTaxons$: Observable<Action> = this.actions$
    .ofType(SearchActions.GET_CHILD_TAXONS)
    .pipe(
      switchMap((action: any) =>
        this.productService.getChildTaxons(
          action.payload.taxonomiesId,
          action.payload.taxonId
        )
      ),
      map((data: any) =>
        this.searchActions.getChildTaxonsSuccess({ taxonList: data })
      )
    );

  // tslint:disable-next-line:member-ordering
  @Effect()
  GetTaxonomiByName$: Observable<Action> = this.actions$
    .ofType(SearchActions.GET_TAXONOMIES_BY_NAME)
    .pipe(
      switchMap((action: any) =>
        this.productService.getTaxonByName(action.payload)
      ),
      map((data: any) =>
        this.searchActions.getTaxonomiesByNameSuccess({ taxonomiList: data })
      )
    );

  // tslint:disable-next-line:member-ordering
  @Effect()
  GetRelatedProducts$: Observable<Action> = this.actions$
    .ofType(ProductActions.GET_RELATED_PRODUCT)
    .pipe(
      switchMap((action: any) =>
        this.productService.getRelatedProducts(action.payload)
      ),
      map((products: Product[]) =>
        this.productActions.getRelatedProductSuccess({ products })
      )
    );

  // tslint:disable-next-line:member-ordering
  @Effect()
  GetReview$: Observable<Action> = this.actions$
    .ofType(ProductActions.GET_REVIEWS)
    .pipe(
      switchMap((action: any) =>
        this.productService.getProductReviews(action.payload)
      ),
      map((data: any) =>
        this.productActions.getProductReviewsSuccess({ reviews: data })
      )
    );
}
