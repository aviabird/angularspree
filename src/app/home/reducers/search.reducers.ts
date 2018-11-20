import { Taxonomy } from './../../core/models/taxonomy';
import { Product } from './../../core/models/product';
import { SearchActions } from './search.actions';
import { SearchState, SearchStateRecord } from './search.state';

export const initialState: SearchState = new SearchStateRecord() as unknown as SearchState;
let isUpdated: boolean;
let updatedCategory: any;
export function reducer(state = initialState, { type, payload }: any): SearchState {
  switch (type) {
    case SearchActions.ADD_FILTER:
      let filterAlreadyPresent = false;
      state.selectedFilters.forEach(filter => {
        const filterId = filter['id'];
        if (filterId === payload.id) {
          filterAlreadyPresent = true;
        }
      });

      if (filterAlreadyPresent) {
        return state;
      } else {
        const selectedFilters = state.selectedFilters.concat([payload]);
        const selectedTaxonIds = state.selectedTaxonIds.concat(payload.id);
        return state.merge({
          selectedFilters: selectedFilters,
          selectedTaxonIds: selectedTaxonIds,
        }) as SearchState;
      }

    case SearchActions.REMOVE_FILTER:
      let removeIndex = -1;
      state.selectedFilters.forEach((filter, index) => {
        const filterId = filter['id'];
        if (filterId === payload.id) {
          removeIndex = index;
        }
      });
      const _selectedFilters = state.selectedFilters.remove(removeIndex);
      const taxonRemoveIndex = state.selectedTaxonIds.findIndex(filterId => payload.id === filterId);
      const _selectedTaxonIds = state.selectedTaxonIds.remove(taxonRemoveIndex);
      return state.merge({
        selectedFilters: _selectedFilters,
        selectedTaxonIds: _selectedTaxonIds
      }) as SearchState;

    case SearchActions.GET_PRODUCTS_BY_KEYWORD_SUCCESS:
      const _productsByKeyword: Product[] = payload;
      return state.merge({
        productsByKeyword: _productsByKeyword,
        searchKeyword: localStorage.getItem('keyword')
      }) as SearchState;

    case SearchActions.GET_CHILD_TAXONS_SUCCESS:
      const selectedCategory = { 'id': payload.taxonList.id, 'name': payload.taxonList.name }
      let _categeoryLevel = state.categeoryLevel
      state.categeoryLevel.forEach((categeory, i) => {
        if (categeory.id === selectedCategory.id) {
          isUpdated = true
          updatedCategory = _categeoryLevel.slice(0, i + 1)
          _categeoryLevel = updatedCategory
        } else {
          isUpdated = false
        }
      });
      if (isUpdated !== true) {
        _categeoryLevel = _categeoryLevel.push(selectedCategory);
      }
      const _getChildTaxons: Taxonomy = payload.taxonList;
      return state.merge({
        getChildTaxons: _getChildTaxons,
        categeoryLevel: _categeoryLevel
      }) as SearchState;

    case SearchActions.CLEAR_SELECTED_CATAGEORY:
      return state.merge({
        categeoryLevel: []
      }) as SearchState;

    case SearchActions.GET_TAXONOMIES_BY_NAME_SUCCESS:
      let _taxonomiByName: Taxonomy[] = payload.taxonomiList.taxonomiList.taxonomies;
      const brandArray = [];
      const brandsRoot = _taxonomiByName[0].root;
      const lengthBrands = brandsRoot.taxons.length;
      for (let i = 0; i < lengthBrands; i++) {
        const lengthCategory = brandsRoot.taxons[i].taxons.length;
        for (let j = 0; j < lengthCategory; j++) {
          if (brandsRoot.taxons[i].taxons[j].name === payload.category) {
            brandArray.push({
              icon: brandsRoot.taxons[i].icon,
              id: brandsRoot.taxons[i].id,
              name: brandsRoot.taxons[i].name
            })
          }
        }
      }
      _taxonomiByName = brandArray

      return state.merge({
        taxonomiByName: _taxonomiByName
      }) as SearchState;

    case SearchActions.SET_SEARCH_FILTER_ON:
      return state.merge({ searchFilter: true }) as SearchState;

    case SearchActions.SET_SEARCH_FILTER_OFF:
      return state.merge({ searchFilter: false }) as SearchState;

    default:
      return state;
  }
};
