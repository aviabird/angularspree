import { SearchState } from './search.state';
import { AppState } from './../../interfaces';
import { createSelector } from 'reselect';

/******************* Base Search State ******************/
function getSearchState(state: AppState): SearchState {
    return state.search;
};

/******************* Individual selectors ******************/
function fetchSelectedFilters(state: SearchState) {
    return state.selectedFilters.toJS();
};

function fetchSelectedTaxonIds(state: SearchState) {
    return state.selectedTaxonIds.toJS();
}

/******************* Public Selector API's ******************/
export const getFilters = createSelector(getSearchState, fetchSelectedFilters);
export const getSelectedTaxonIds = createSelector(getSearchState, fetchSelectedTaxonIds);
