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
      .get<Product>(
        `api/v1/products/${id}?${+new Date()}`
      )
  }

  getProductReviews(productId: string): Observable<Array<Review>> {
    return this.http.get<Array<Review>>(`api/v1/product/${productId}/reviews`);
  }

  getProductRatingSummery(productId: string): Observable<any> {
    return this.http.get('api/v1/product/${productId}/rating-summary')
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
      .get<Array<Product>>(
        `api/v1/products?sort=date&page[limit]=20&page[offset]=${pageNumber}`
      )
  }

  markAsFavorite(id: number): Observable<{}> {
    return this.http.post<{}>(`favorite_products`, { id: id });
  }

  removeFromFavorite(id: number): Observable<{}> {
    return this.http.delete<{}>(`favorite_products/${id}`);
  }

  getFavoriteProducts(): Observable<Array<Product>> {
    return this.http
      .get<{ data: CJsonApi[] }>(
        `favorite_products.json?per_page=20&data_set=small`
      )
      .pipe(
        map(
          (resp: any) => resp.data
        )
      );
  }

  getUserFavoriteProducts(): Observable<Array<Product>> {
    return this.http
      .get<{ data: CJsonApi[] }>(
        `spree/user_favorite_products.json?data_set=small`
      )
      .pipe(
        map(
          resp => this.apiParser.parseArrayofObject(resp.data) as Array<Product>
        )
      );
  }

  getProductsByTaxon(id: string): Observable<any> {
    return this.http
      .get<{ data: CJsonApi[]; pagination: Object }>(
        `api/v1/taxons/products?${id}&per_page=20&data_set=small`
      )
      .pipe(
        map(resp => {
          return {
            pagination: resp.pagination,
            products: this.apiParser.parseArrayofObject(resp.data) as Array<Product>
          };
        })
      );
  }

  getProductsByTaxonNP(id: string): Observable<Array<Product>> {
    return this.http
      .get<{ data: CJsonApi[] }>(
        `api/v1/taxons/products?id=${id}&per_page=20&data_set=small`
      )
      .pipe(
        map(
          (resp: any) => resp.data
          // resp => this.apiParser.parseArrayofObject(resp.data) as Array<Product>
        )
      );
  }

  getTaxonByName(name: string): Observable<Array<Taxonomy>> {
    return this.http.get<Array<Taxonomy>>(
      `api/v1/taxonomies?q[name_cont]=${name}&set=nested&per_page=2`
    );
  }

  getproductsByKeyword(keywords: any): Observable<Array<Product>> {
    return this.http
      .get<Array<Product>>(`api/v1/products?page[limit]=20&page[offset]=1`, { params: keywords });
  }

  getChildTaxons(taxonomyId: string, taxonId: string): Observable<Array<Taxonomy>> {
    return this.http.get<Array<Taxonomy>>(
      `/api/v1/taxonomies/${taxonomyId}/taxons/${taxonId}`
    );
  }

  writeProductReview(params: Object): Observable<Review> {
    return this.http.post<Review>(`api/v1/reviews`, params)
  }

  getRelatedProducts(productId: any): Observable<Array<Product>> {
    return this.http
      .get<{ data: CJsonApi[] }>(`api/products/${productId}/relations`)
      .pipe(
        map(
          resp => this.apiParser.parseArrayofObject(resp.data) as Array<Product>
        )
      );
  }

  getBrands(): Observable<Array<Brand>> {
    return this.http.get<Array<Brand>>(`api/v1/brands`);
  }

  getProductRatingOptions(ratingCategoryId: number): Observable<Array<RatingOption>>  {
    return this.http.get<Array<RatingOption>>(`api/v1/ratings/${ratingCategoryId}`);
  }

}
