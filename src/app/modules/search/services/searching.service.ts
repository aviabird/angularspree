import { filter } from 'rxjs/operators';
import { HttpClient, HttpParams } from '@angular/common/http';
import { SearchParam, SearchAppliedParams, SearchFilter } from './../models/search-param';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../../../core/models';
import { SortFilter } from '../models/sort-filter';

@Injectable({
  providedIn: 'root'
})
export class SearchingService {
  static DEFAULT_APPLIED_FILTERS = {
    filters: [],
    rangeFilters: [],
    sort: ''
  };

  static SORT_CONFIG: Array<SortFilter> = [
    { name: 'Recommended', value: '', default: true },
    { name: 'Price: High to Low', value: 'price-desc-rank' },
    { name: 'Price: Low to High', value: 'price-asc-rank' },
    { name: 'Avg. Customer Review', value: 'avg_rating' },
    { name: 'Newest Arrivals', value: 'date' },
  ];

  pageData = { rows: '50', o: '0', p: '1' };

  constructor(
    private http: HttpClient,
  ) { }

  search(appliedParams: SearchAppliedParams) {
    return this.http
      .post<{ data: Array<Product>, links: any, meta: any }>(
        `api/v1/products`,
        {
          ...this.convertToAPISearchParams(appliedParams),
          ...this.pageData
        }
      );
  }

  convertToAPISearchParams({ sort, filters, rangeFilters }: SearchAppliedParams) {
    return {
      f: this.stringifySearchFilter(filters),
      rf: this.stringifySearchFilter(rangeFilters),
      sort: sort
    }
  }

  private stringifySearchFilter(searchFilter: Array<SearchFilter>) {
    return (searchFilter || [])
    .filter(({ values }) => values.length)
    .map(({ id, values }) => {
      return `${id}:${values.join(',')}`;
    }).join('::');
  }
}
