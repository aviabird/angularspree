import { HttpClient } from '@angular/common/http';
import {
  SearchParam,
  SearchAppliedParams,
  SearchFilter,
  SearchResponse
} from './../models/search-param';
import { Injectable } from '@angular/core';
import { Product } from '../../../core/models';
import { SortFilter } from '../models/sort-filter';
import { Observable } from 'rxjs';

/**
 *
 *
 * @export
 * @class SearchingService
 */
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
    { name: 'Newest Arrivals', value: 'date' }
  ];

  /**
   *Creates an instance of SearchingService.
   * @param {HttpClient} http
   * @memberof SearchingService
   */
  constructor(private http: HttpClient) {}

  /**
   *
   *
   * @param {SearchParam} apiParams
   * @returns {Observable<SearchResponse>}
   * @memberof SearchingService
   */
  search(apiParams: SearchParam): Observable<SearchResponse> {
    return this.http.get<{ data: Array<Product>; links: any; meta: any }>(
      `api/v1/products`,
      {
        params: <any>apiParams
      }
    );
  }

  /**
   *
   *
   * @param {SearchAppliedParams} { sort, filters, rangeFilters, q, limit, page, offset }
   * @returns {SearchParam}
   * @memberof SearchingService
   */
  convertToAPISearchParams({
    sort,
    filters,
    rangeFilters,
    q,
    limit,
    page,
    offset
  }: SearchAppliedParams): SearchParam {
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

  /**
   *
   *
   * @param {SearchParam} { f, q, rf, rows, sort, o, p }
   * @returns {SearchAppliedParams}
   * @memberof SearchingService
   */
  convertToAppliedParams({
    f,
    q,
    rf,
    rows,
    sort,
    o,
    p
  }: SearchParam): SearchAppliedParams {
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

  /**
   *
   *
   * @private
   * @param {string} str
   * @returns {Array<SearchFilter>}
   * @memberof SearchingService
   */
  private parseStringSearchFilter(str: string): Array<SearchFilter> {
    return (str || '')
      .split('::')
      .filter(fs => fs.split(':').length === 2)
      .map(fs => {
        const [filterName, valStr] = fs.split(':');
        const values = valStr.split(',');
        return { id: filterName, values: values };
      });
  }

  /**
   *
   *
   * @private
   * @param {Array<SearchFilter>} searchFilters
   * @returns
   * @memberof SearchingService
   */
  private stringifySearchFilter(searchFilters: Array<SearchFilter>) {
    return (searchFilters || [])
      .filter(({ values }) => values.length)
      .map(({ id, values }) => {
        return `${id}:${values.join(',')}`;
      })
      .join('::');
  }

  /**
   *
   *
   * @private
   * @param {*} params
   * @returns
   * @memberof SearchingService
   */
  private sanitizeParams(params) {
    let newParam = {};

    Object.keys(params)
      .filter(param => params[param])
      .map(param => (newParam = { ...newParam, [param]: params[param] }));

    return newParam;
  }

  /**
   * This will update the applied parameters as per the updated filter values.
   *
   * @param {SearchAppliedParams} appliedParams
   * @param {*} updatedVal
   * @param {string} filterName
   * @returns {SearchAppliedParams}
   * @memberof SearchingService
   */
  updateFilter(
    appliedParams: SearchAppliedParams,
    updatedVal: any,
    filterName: string
  ): SearchAppliedParams {
    const currentAppliedFilters = appliedParams.filters;
    const filterToUpdate = currentAppliedFilters.find(f => f.id === filterName);
    let newCurrentFilters: Array<SearchFilter>;

    if (filterToUpdate) {
      const currentValues = filterToUpdate.values;
      const exists = currentValues.find(v => v === updatedVal);
      const filteredValues = currentValues.filter(v => v !== updatedVal);
      const filteredAppliedFilters = currentAppliedFilters.filter(
        f => f.id !== filterName
      );
      newCurrentFilters = [
        ...filteredAppliedFilters,
        {
          ...filterToUpdate,
          values: exists ? filteredValues : [...filteredValues, updatedVal]
        }
      ];
    } else {
      newCurrentFilters = [
        ...currentAppliedFilters,
        {
          id: filterName,
          values: [updatedVal]
        }
      ];
    }

    return {
      ...appliedParams,
      filters: newCurrentFilters
    };
  }
}
