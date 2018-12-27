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
  static DEFAULT_APPLIED_FILTERS: SearchAppliedParams = {
    filters: [],
    rangeFilters: [],
    sort: '',
    limit: '50',
    page: '1',
    offset: '0'
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

  search(apiParams: SearchParam) {
    return this.http
      .get<{ data: Array<Product>, links: any, meta: any }>(
        `api/v1/products`,
        {
          params: <any>apiParams
        }
      );
  }

  convertToAPISearchParams({ sort, filters, rangeFilters, q, limit, page, offset }: SearchAppliedParams): SearchParam {
    return this.sanitizeParams({
      f: this.stringifySearchFilter(filters),
      rf: this.stringifySearchFilter(rangeFilters),
      sort: sort,
      rows: limit || '50',
      p: page || '1',
      o: offset || '0',
      q: q
    });
  }

  convertToAppliedParams({ f, q, rf, rows, sort, o, p }: SearchParam): SearchAppliedParams {
    return this.sanitizeParams({
      filters: this.parseStringSearchFilter(f),
      rangeFilters: this.parseStringSearchFilter(rf),
      sort: sort,
      q: q,
      limit: rows,
      offset: o,
      page: p
    });
  }

  private parseStringSearchFilter(str: string): Array<SearchFilter> {
    return (str || '').split('::')
      .filter(fs => fs.split(':').length === 2)
      .map(fs => {
        const [filterName, valStr] = fs.split(':');
        const values = valStr.split(',');
        return { id: filterName, values: values }
      })
  }

  private stringifySearchFilter(searchFilters: Array<SearchFilter>) {
    return (searchFilters || [])
      .filter(({ values }) => values.length)
      .map(({ id, values }) => {
        return `${id}:${values.join(',')}`;
      }).join('::');
  }

  private sanitizeParams(params) {
    let newParam = {};

    Object.keys(params)
      .filter(param => params[param])
      .map(param => newParam = { ...newParam, [param]: params[param] })

    return newParam;
  }
}
