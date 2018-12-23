import { HttpClient } from '@angular/common/http';
import { SearchParam } from './../models/search-param';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../../../core/models';

@Injectable({
  providedIn: 'root'
})
export class SearchingService {

  constructor(
    private http: HttpClient,
  ) {}

  search(searchParams: SearchParam): Observable<{}> {
    return this.http
      .get<Array<Product>>(`api/v1/products?page[limit]=20&page[offset]=1`);
  }
}
