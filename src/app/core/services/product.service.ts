import { JsonApiParserService } from './json-api-parser.service';
import { CJsonApi } from './../models/jsonapi';
import { ToastrService } from 'ngx-toastr';
import { Taxonomy } from './../models/taxonomy';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Brand } from '../models/brand';
import { RatingCategory } from '../models/rating_category';
import { RatingOption } from '../models/rating_option';
import { Review } from '../models/review';

@Injectable()
export class ProductService {
  /**
   * Creates an instance of ProductService.
   * @param {HttpService} http
   *
   * @memberof ProductService
   */
  constructor(
    private http: HttpClient,
    private toastrService: ToastrService,
    private apiParser: JsonApiParserService,
  ) { }
  // tslint:disable-next-line:member-ordering
  success: any;
  // tslint:disable-next-line:member-ordering
  error: any;
  /**
   *
   *
   * @param {string} id
   * @returns {Observable<Product>}
   *
   * @memberof ProductService
   */
  getProduct(id: string): Observable<Product> {
    return this.http
      .get<{data: Product}>(
        `api/v1/products/${id}?${+new Date()}`
      ).pipe(map(resp => resp.data));
  }

  getProductReviews(productId: string): Observable<Array<Review>> {
    return this.http.get<{data: Array<Review>}>(`api/v1/product/${productId}/reviews`).pipe(map(resp => resp.data));
  }

  getProductRatingSummery(productId: string): Observable<any> {
    return this.http.get<any>('api/v1/product/${productId}/rating-summary').pipe(map(resp => resp.data));
  }

  /**
   *
   *
   * @returns {Array<Taxonomy>}
   *
   * @memberof ProductService
   */
  getTaxonomies(): any { return this.http.get<Array<Taxonomy>>(`api/v1/taxonomies`); }

  /**
   *
   *
   * @returns {Array<Product>}
   *
   * @memberof ProductService
   */
  getProducts(pageNumber: number): Observable<Array<Product>> {
    return this.http
      .get<{data: Array<Product>}>(
        `api/v1/products?sort=date&rows=20&o=${(pageNumber - 1) * 20}`
      ).pipe(map(resp => resp.data));
  }

  markAsFavorite(id: number): Observable<{}> {
    return this.http.post<{}>(`favorite_products`, { id: id });
  }

  removeFromFavorite(id: number): Observable<{}> {
    return this.http.delete<{}>(`favorite_products/${id}`);
  }

  getFavoriteProducts(): Observable<Array<Product>> {
    return this.http
      .get<{ data: Array<Product> }>(
        `favorite_products.json?per_page=20&data_set=small`
      )
      .pipe(map(res => res.data));
  }

  getUserFavoriteProducts(): Observable<Array<Product>> {
    return this.http
      .get<{ data: Array<Product> }>(
        `spree/user_favorite_products.json?data_set=small`
      )
      .pipe(map(res => res.data));
  }

  getProductsByTaxon(id: string): Observable<any> {
    return this.http
      .get<{ data: Array<Product> }>(
        `api/v1/taxons/products?${id}&per_page=20&data_set=small`
      )
      .pipe(map(res => res.data));
  }

  getProductsByTaxonNP(id: string): Observable<Array<Product>> {
    return this.http
      .get<{ data: Array<Product> }>(
        `api/v1/taxons/products?id=${id}&per_page=20&data_set=small`
      )
      .pipe(map(res => res.data))
  }

  getTaxonByName(name: string): Observable<Array<Taxonomy>> {
    return this.http.get<{data: Array<Taxonomy>}>(
      `api/v1/taxonomies?q[name_cont]=${name}&set=nested&per_page=2`
    ).pipe(map(res => res.data));
  }

  getproductsByKeyword(keywords: any): Observable<Array<Product>> {
    return this.http
      .get<{data: Array<Product>}>(`api/v1/products?rows=20&o=1`, { params: keywords }).pipe(map(res => res.data));
  }

  getChildTaxons(taxonomyId: string, taxonId: string): Observable<Array<Taxonomy>> {
    return this.http.get<{data: Array<Taxonomy>}>(
      `/api/v1/taxonomies/${taxonomyId}/taxons/${taxonId}`
    ).pipe(map(res => res.data));
  }

  writeProductReview(params: Object): Observable<Review> {
    return this.http.post<{data: Review}>(`api/v1/reviews`, params).pipe(map(res => res.data));
  }

  getRelatedProducts(productId: any): Observable<Array<Product>> {
    return this.http
      .get<{ data: Array<Product> }>(`api/products/${productId}/relations`)
      .pipe(map(res => res.data));
  }

  getBrands(): Observable<Array<Brand>> {
    return this.http.get<{data: Array<Brand>}>(`api/v1/brands`).pipe(map(resp => resp.data));
  }

  getProductRatingOptions(ratingCategoryId: number): Observable<Array<RatingOption>>  {
    return this.http.get<{data: Array<RatingOption>}>(`api/v1/ratings/${ratingCategoryId}`).pipe(map(resp => resp.data));
  }

}
