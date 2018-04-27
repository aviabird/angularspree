import { getTaxonomies } from './../../product/reducers/selectors';
import { Taxonomy } from './../models/taxonomy';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable()
export class ProductService {

  /**
   * Creates an instance of ProductService.
   * @param {HttpService} http
   *
   * @memberof ProductService
   */
  constructor(private http: HttpClient) { }

  /**
   *
   *
   * @param {string} id
   * @returns {Observable<any>}
   *
   * @memberof ProductService
   */
  getProduct(id: string): Observable<any> { return this.http.get<Product>(`/spree/api/v1/products/${id}`) }

  /**
   *
   *
   * @returns {Array<Taxonomy>}
   *
   * @memberof ProductService
   */
  getTaxonomies(): any { return this.http.get<Array<Taxonomy>>(`/spree/api/v1/taxonomies?set=nested`) }

  /**
   *
   *
   * @returns {Array<Product>}
   *
   * @memberof ProductService
   */
  getProducts(): any { return this.http.get<Array<Product>>(`/spree/api/v1/products`) }

  markAsFavorite(id: number): Observable<{}> { return this.http.post<{}>(`/spree/favorite_products`, { id: id }) }

  removeFromFavorite(id: number): Observable<{}> { return this.http.delete<{}>(`/spree/favorite_products/${id}`) }

  getFavoriteProducts(): Observable<Array<Product>> { return this.http.get<Array<Product>>(`/spree/favorite_products`) }

  // tslint:disable-next-line:max-line-length
  getProducts_by_taxon(id: number): Observable<Array<Product>> {
    return this.http.get<Array<Product>>(`/spree/api/v1/taxons/products?id=${id}`)
  }

  getTaxonByName(name: string): Observable<Array<Taxonomy>> {
    return this.http.get<Array<Taxonomy>>(`/spree/api/v1/taxonomies?q[name_cont]=${name}`)
  }
}
