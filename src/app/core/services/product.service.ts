import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

import { JsonApiParserService } from './json-api-parser.service';
import { CJsonApi } from './../models/jsonapi';
import { ToastrService } from 'ngx-toastr';
import { Taxonomy } from './../models/taxonomy';
import { Product } from '../models/product';

@Injectable()
export class ProductService {
  success: any;
  error: any;

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
      .get<{ data: CJsonApi }>(
        `api/v1/products/${id}?data_set=large`
      )
      .pipe(
        map(resp => {
          const product = this.apiParser.parseSingleObj(resp.data) as Product;
          return product;
        })
      );
  }

  getProductReviews(products): Observable<any> {
    return this.http.get(`products/${products}/reviews`);
  }

  /**
   *
   *
   * @returns {Observable<Array<Taxonomy>>}
   * @memberof ProductService
   */
  getTaxonomies(): Observable<Array<Taxonomy>> {
    return this.http.get<Array<Taxonomy>>(`api/v1/taxonomies?set=nested`);
  }

  /**
   *
   *
   * @param {number} pageNumber
   * @returns {Observable<Array<Product>>}
   * @memberof ProductService
   */
  getProducts(pageNumber: number): Observable<Array<Product>> {
    return this.http
      .get<{ data: CJsonApi[] }>(
        `api/v1/products?q[s]=avg_rating+desc&page=${pageNumber}&per_page=20&data_set=small`
      )
      .pipe(
        map(
          resp => this.apiParser.parseArrayofObject(resp.data) as Array<Product>
        )
      );
  }

  /**
   *
   *
   * @param {number} id
   * @returns {Observable<{}>}
   * @memberof ProductService
   */
  markAsFavorite(id: number): Observable<{}> {
    return this.http.post<{}>(`favorite_products`, { id: id });
  }

  /**
   *
   *
   * @param {number} id
   * @returns {Observable<{}>}
   * @memberof ProductService
   */
  removeFromFavorite(id: number): Observable<{}> {
    return this.http.delete<{}>(`favorite_products/${id}`);
  }

  /**
   *
   *
   * @returns {Observable<Array<Product>>}
   * @memberof ProductService
   */
  getFavoriteProducts(): Observable<Array<Product>> {
    return this.http
      .get<{ data: CJsonApi[] }>(
        `favorite_products.json?per_page=20&data_set=small`
      )
      .pipe(
        map(
          resp => this.apiParser.parseArrayofObject(resp.data) as Array<Product>
        )
      );
  }

  /**
   *
   *
   * @returns {Observable<Array<Product>>}
   * @memberof ProductService
   */
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

  /**
   *
   *
   * @param {string} id
   * @returns {Observable<{pagination: Object, products: Array<Product>}>}
   * @memberof ProductService
   */
  getProductsByTaxon(id: string): Observable<{ pagination: Object, products: Array<Product> }> {
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

  /**
   *
   *
   * @param {string} id
   * @returns {Observable<Array<Product>>}
   * @memberof ProductService
   */
  getProductsByTaxonNP(id: string): Observable<Array<Product>> {
    return this.http
      .get<{ data: CJsonApi[] }>(
        `api/v1/taxons/products?id=${id}&per_page=20&data_set=small`
      )
      .pipe(
        map(
          resp => this.apiParser.parseArrayofObject(resp.data) as Array<Product>
        )
      );
  }

  /**
   *
   *
   * @param {string} name
   * @returns {Observable<Array<Taxonomy>>}
   * @memberof ProductService
   */
  getTaxonByName(name: string): Observable<Array<Taxonomy>> {
    return this.http.get<Array<Taxonomy>>(
      `api/v1/taxonomies?q[name_cont]=${name}&set=nested&per_page=2`
    );
  }

  /**
   *
   *
   * @param {string} keyword
   * @returns {Observable<{pagination: Object, products: Array<Product>}>}
   * @memberof ProductService
   */
  getproductsByKeyword(keyword: string): Observable<{ pagination: Object, products: Array<Product> }> {
    return this.http
      .get<{ data: CJsonApi[]; pagination: Object }>(
        `api/v1/products?${keyword}&per_page=20&data_set=small`
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

  /**
   *
   *
   * @param {string} taxonomyId
   * @param {string} taxonId
   * @returns {Observable<Array<Taxonomy>>}
   * @memberof ProductService
   */
  getChildTaxons(taxonomyId: string, taxonId: string): Observable<Array<Taxonomy>> {
    return this.http.get<Array<Taxonomy>>(
      `/api/v1/taxonomies/${taxonomyId}/taxons/${taxonId}`
    );
  }

  /**
   *
   *
   * @param {*} productId
   * @param {*} params
   * @returns
   * @memberof ProductService
   */
  submitReview(productId: any, params: any) {
    return this.http.post(`products/${productId}/reviews`, params).pipe(
      map(
        success => {
          this.success = success;
          if (this.success.type === 'info') {
            this.toastrService.info(this.success.message, this.success.type);
            return this.success.type;
          } else {
            this.toastrService.success(this.success.message, this.success.type);
            return this.success.type;
          }
        },
        error => {
          this.error = error;
          this.toastrService.error(this.error.message, this.error.type);
          return this.error.type;
        }
      )
    );
  }

  /**
   *
   *
   * @param {number} productId
   * @returns {Observable<Array<Product>>}
   * @memberof ProductService
   */
  getRelatedProducts(productId: number): Observable<Array<Product>> {
    return this.http
      .get<{ data: CJsonApi[] }>(`api/products/${productId}/relations`)
      .pipe(
        map(
          resp => this.apiParser.parseArrayofObject(resp.data) as Array<Product>
        )
      );
  }
}
