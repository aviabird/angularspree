export interface SearchParam {
  q?: string;
  categories?: Array<string>;
  brands?: Array<string>;
  filterOptions?: Array<FilterOption>;
  sort?: string;
  page?: {
    limit?: string;
    offset?: string;
  }
}

export interface FilterOption {
  name: string;
  value: string;
}
