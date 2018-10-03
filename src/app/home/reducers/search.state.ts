import { Taxonomy } from './../../core/models/taxonomy';
import { Product } from './../../core/models/product';
/** Search state
 * [{
 *   name: 'Bag',
 *   taxonId: 1
 * }, {
 *   name: 'T-shirts',
 *   taxonId: 9
 * }]
 *
*/

import { List, Record, Map } from 'immutable';

export interface SearchState extends Map<string, any> {
  selectedFilters: List<Map<string, any>>;
  selectedTaxonIds: List<number>;
  productsByKeyword: List<Product>;
  getChildTaxons: List<Taxonomy>;
  categeoryLevel: List<any>;
  taxonomiByName: List<any>;
  paginationData: Map<string, any>;
  searchKeyword: String;
  searchFilter: boolean;
}

export const SearchStateRecord = Record({
  selectedFilters: List([]),
  selectedTaxonIds: List([]),
  productsByKeyword: List([]),
  getChildTaxons: List([]),
  categeoryLevel: List([]),
  taxonomiByName: List([]),
  paginationData: Map({}),
  searchKeyword: '',
  searchFilter: false
});
