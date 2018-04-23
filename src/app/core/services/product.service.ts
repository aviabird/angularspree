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
}
