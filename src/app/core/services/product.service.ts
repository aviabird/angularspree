import { Observable } from 'rxjs/Rx';
import { HttpService } from './http';
import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {

  constructor(private http: HttpService) { }

  getProduct(id: string): Observable<any> {
    return this.http.get('/products/1')
    .map(res => console.log(res.json()));
  }
}
