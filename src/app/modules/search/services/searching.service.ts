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
  static DEFAULT_FILTER = {
    rows: '50',
    o: '0'
  };

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

  search(searchParams: SearchParam) {
    return this.http.post<{data: Array<Product>, links: any, meta: any}>(`api/v1/products`, searchParams);
  }
}
