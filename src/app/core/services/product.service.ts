import { ToastrService } from 'ngx-toastr';
import { getUserFavoriteProducts } from './../../user/reducers/selector';
import { getTaxonomies } from './../../product/reducers/selectors';
import { Taxonomy } from './../models/taxonomy';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { catchError, map, tap } from 'rxjs/operators';
import { of as observableOf, Observable } from 'rxjs';

@Injectable()
export class ProductService {

  /**
   * Creates an instance of ProductService.
   * @param {HttpService} http
   *
   * @memberof ProductService
   */
  constructor(private http: HttpClient,
    private toastrService: ToastrService) { }

  /**
   *
   *
   * @param {string} id
   * @returns {Observable<any>}
   *
   * @memberof ProductService
   */
  getProduct(id: string): Observable<any> { return this.http.get<Product>(`api/v1/products/${id}`) }

  getProductReviews(products): Observable<any> {
    return this.http.get(`products/${products}/reviews`)
  }
  /**
   *
   *
   * @returns {Array<Taxonomy>}
   *
   * @memberof ProductService
   */
  getTaxonomies(): any { return this.http.get<Array<Taxonomy>>(`api/v1/taxonomies?set=nested`) }

  /**
   *
   *
   * @returns {Array<Product>}
   *
   * @memberof ProductService
   */
  getProducts(pageNumber: number): Observable<{}> { return this.http.get<Array<Product>>(`api/v1/products?page=${pageNumber}&per_page=20`) }

  markAsFavorite(id: number): Observable<{}> { return this.http.post<{}>(`favorite_products`, { id: id }) }

  removeFromFavorite(id: number): Observable<{}> { return this.http.delete<{}>(`favorite_products/${id}`) }

  getFavoriteProducts(): Observable<Array<Product>> { return this.http.get<Array<Product>>(`favorite_products.json?per_page=20`) }

  getUserFavoriteProducts(): Observable<Array<Product>> { return this.http.get<Array<Product>>(`spree/user_favorite_products.json`) }

  // tslint:disable-next-line:max-line-length
  getProductsByTaxon(id: string): Observable<Array<Product>> {
    return this.http.get<Array<Product>>(`api/v1/taxons/products?${id}&per_page=20`)
  }

  getTaxonByName(name: string): Observable<Array<Taxonomy>> {
    return this.http.get<Array<Taxonomy>>(`api/v1/taxonomies?q[name_cont]=${name}&set=nested`)
  }

  getproductsByKeyword(keyword: string): Observable<Array<Product>> {
    return this.http.get<Array<Product>>(`api/v1/products?${keyword}&per_page=20`)
  }

  getChildTaxons(taxonomyId: string, taxonId: string): Observable<Array<Taxonomy>> {
    return this.http.get<Array<Taxonomy>>(`/api/v1/taxonomies/${taxonomyId}/taxons/${taxonId}`)
  }
  getRecentlyViewedProducts() {
    return this.http.get(`api/v1/products?per_page=20`);
  }

  submitReview(productId: any, params: any) {
    return this.http.post(`products/${productId}/reviews`, params)
      .pipe(
      map(_ => this.toastrService.success(
        'Review Submitted.',
        'Success')
      ),
      tap(
        _ => _,
        _ => this.toastrService.error('something went wrong (reviws)', 'ERROR!!')
      )
      )
  }
}
