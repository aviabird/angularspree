import { Product } from './../../../../core/models/product';
import { Map, Record, List } from 'immutable';
import { SearchAppliedParams } from '../../models/search-param';

export interface SearchState extends Map<string, any> {
  searchAppliedParams: SearchAppliedParams,
  searchResults: List<Product>,
  isLoading: boolean,
  meta: Map<string, any>
}

export const SearchStateRecord = Record({
  searchAppliedParams: Map({}),
  isLoading: true,
  searchResults: [],
  meta: Map({})
});
