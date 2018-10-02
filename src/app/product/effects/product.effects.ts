import { map, switchMap } from 'rxjs/operators';
import { SearchActions } from './../../home/reducers/search.actions';
import { Product } from './../../core/models/product';
import { ProductActions } from './../actions/product-actions';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { ProductService } from './../../core/services/product.service';
import { Action } from '@ngrx/store';
import { Brand } from '../../core/models/brand';
import { Review } from '../../core/models/review';
import { RatingOption } from '../../core/models/rating_option';

@Injectable()
export class ProductEffects {

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

  @Effect()
  GetAllTaxonomies$: Observable<Action> = this.actions$
    .ofType(ProductActions.GET_ALL_TAXONOMIES)
    .pipe(
      switchMap((action: any) => this.productService.getTaxonomies()),
      map((data: any) =>
        this.productActions.getAllTaxonomiesSuccess({ taxonomies: data })
      )
    );

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

    @Effect()
    GetProductsByKeyword$ = this.actions$.ofType(SearchActions.GET_PRODUCTS_BY_KEYWORD).pipe(
      switchMap<Action & { payload }, Array<Product>>(action => {
        return this.productService.getproductsByKeyword(action.payload)
      }),
      map(products => this.searchActions.getProducsByKeywordSuccess(products))
    );

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

  @Effect()
  GetProductReviews$ = this.actions$.ofType(ProductActions.GET_PRODUCT_REVIEWS).pipe(
    switchMap<Action & {payload}, Array<Review>>(action => {
      return this.productService.getProductReviews(action.payload);
    }),
    map(reviewsList => this.productActions.getProductReviewsSuccess(reviewsList))
  );

  @Effect()
  GetBrands$ = this.actions$.ofType(ProductActions.GET_ALL_BRANDS).pipe(
    switchMap<Action, Array<Brand>>(_ => {
      return this.productService.getBrands();
    }),
    map(brands => this.productActions.getBrandsSuccess(brands))
  );

  @Effect()
  WriteProductReview$ = this.actions$.ofType(ProductActions.WRITE_PRODUCT_REVIEW).pipe(
    switchMap<Action & {payload}, Review>(action => {
      return this.productService.writeProductReview(action.payload);
    }),
    map(review => this.productActions.writeProductReviewSuccess(review))
  );

  @Effect()
  GetProductRatingOptions$ = this.actions$.ofType(ProductActions.GET_RATING_OPTIONS).pipe(
    switchMap<Action & {payload}, Array<RatingOption>>(action => {
      return this.productService.getProductRatingOptions(action.payload);
    }),
    map(ratingOption => this.productActions.getRatingsOptionsSuccess(ratingOption))
  );

  constructor(
    private actions$: Actions,
    private productService: ProductService,
    private productActions: ProductActions,
    private searchActions: SearchActions
  ) { }
}
