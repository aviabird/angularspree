import { Observable } from 'rxjs/Rx';
import { HttpService } from './http';
import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {

  constructor(private http: HttpService) { }

  getProduct(id: string): Observable<any> {
    return this.http.get('/api/products/ruby-on-rails-tote')
    .map(res => res.json());
  }
}
