import { Observable } from 'rxjs/Rx';
import { HttpService } from './http';
import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {

  constructor(private http: HttpService) { }

  getProduct(id: string): Observable<any> {
    return this.http.get(`/spree/api/v1/products/${id}`)
    .map(res => res.json());
  }

  getTaxonomies(): any {
    return this.http.get(`/spree/api/v1/taxonomies?set=nested`)
    .map(res => res.json());
  }

  getProducts(): any {
    return this.http.get(`/spree/api/v1/products`)
    .map(res => res.json());
  }
}
