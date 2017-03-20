import { SearchState } from './search.state';
import { AppState } from './../../interfaces';
import { createSelector } from 'reselect';

function getSearchState(state: AppState): SearchState {
    return state.search;
};

function getSelectedFilters(state: SearchState) {
    return state.selectedFilters.toJS();
};

export const getFilters = createSelector(getSearchState, getSelectedFilters);
