/**
 * Allowed API parameters
 *
 * @export
 * @interface SearchParam
 */
export interface SearchParam {
  q?: string;
  f?: string;
  p?: string;
  rf?: string;
  sort?: string;
  rows?: string;
  o?: string;
}

// ex: {id: 'Color', {id: 'red', count: 100, meta: 'red'}}
// ex: {id: 'Category', {id: 'tshirt', count: 100, meta: ''}}
export interface FilterAgg {
  id: string,
  filterValues: Array<FilterValueAgg>
}

// ex: {id: 'red', count: 100, meta: 'red'}
export interface FilterValueAgg {
  id: string;
  count: string;
  meta: string;
}

/**
 * Applied Search params in angular components,
 * which will be converted to API SearchParams
 * @export
 * @interface SearchAppliedParams
 */
export interface SearchAppliedParams {
  q?: string;
  filters?: Array<SearchFilter>;
  rangeFilters?: Array<SearchFilter>;
  sort?: string;
  limit?: string;
  offset?: string;
  page?: string;
}

export interface SearchFilter {
  id: string,
  values: Array<string>;
}
