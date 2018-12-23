export interface SearchParam {
  q?: string;
  categories?: Array<string>;
  brands?: Array<string>;
  filterOptions?: Array<FilterOption>;
  sort: string;
}

export interface FilterOption {
  name: string;
  value: string;
}
