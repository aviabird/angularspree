export interface SearchParam {
  q?: string;
  categories?: Array<string>;
  brands?: Array<string>;
  filter_options?: Array<FilterOption>;
  f?: string;
  p?: string;
  rf?: string;
  sort?: string;
  rows?: string;
  o?: string;
}

export interface FilterOption {
  name: string;
  value: Array<string>;
}

export interface SearchAppliedParams {
  filters: Array<SearchFilter>;
  rangeFilters: Array<SearchFilter>;
  sort: string;
}

export interface SearchFilter {
  id: string,
  values: Array<string>;
}
