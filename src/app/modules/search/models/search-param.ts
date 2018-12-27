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

export interface FilterAgg {
  id: string;
  value: string;
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
  filters: Array<SearchFilter>;
  rangeFilters: Array<SearchFilter>;
  sort: string;
}

export interface SearchFilter {
  id: string,
  values: Array<string>;
}
