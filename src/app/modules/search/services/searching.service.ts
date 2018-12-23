import { HttpClient, HttpParams } from '@angular/common/http';
import { SearchParam } from './../models/search-param';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../../../core/models';
import { SortFilter } from '../models/sort-filter';

@Injectable({
  providedIn: 'root'
})
export class SearchingService {
  static SORT_CONFIG: Array<SortFilter> = [
    { name: 'Recommended', value: '', default: true },
    { name: 'Price: High to Low', value: 'price-desc-rank' },
    { name: 'Price: Low to High', value: 'price-asc-rank' },
    { name: 'Avg. Customer Review', value: 'avg_rating' },
    { name: 'Newest Arrivals', value: 'date' },
  ];

  constructor(
    private http: HttpClient,
  ) { }

  search(searchParams: SearchParam): Observable<Array<Product>> {
    return this.http.post<Array<Product>>(`api/v1/products`, searchParams);
  }
}
