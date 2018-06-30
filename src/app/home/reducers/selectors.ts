import { HomeState } from './index';
import { SearchState } from './search.state';
import { createSelector, createFeatureSelector } from '@ngrx/store';

/******************* Base Search State ******************/
export const getHomeState = createFeatureSelector<HomeState>('home');

export const getSearchState = createSelector(
  getHomeState,
  (state: HomeState) => state.search
);

/******************* Individual selectors ******************/
function fetchSelectedFilters(state: SearchState) {
  return state.selectedFilters.toJS();
};

function fetchSelectedTaxonIds(state: SearchState) {
  return state.selectedTaxonIds.toJS();
}

function fetchProductsByKeyword(state: SearchState) {
  return state.productsByKeyword.toJS();
}

function fetchChildTaxons(state: SearchState) {
  return state.getChildTaxons.toJS();
}

function fetchCategeoryLevel(state: SearchState) {
  return state.categeoryLevel.toJS();
}

function fetchTaxonomiByName(state: SearchState) {
  return state.taxonomiByName.toJS();
}

function fetchPaginationData(state: SearchState) {
  return state.paginationData.toJS();
}

function fetchSearchFliterStatus(state: SearchState) {
  return state.searchFilter;
}
/******************* Public Selector API's ******************/
export const getFilters = createSelector(getSearchState, fetchSelectedFilters);
export const getSelectedTaxonIds = createSelector(getSearchState, fetchSelectedTaxonIds);
export const getProductsByKeyword = createSelector(getSearchState, fetchProductsByKeyword);
export const getPaginationData = createSelector(getSearchState, fetchPaginationData);
export const getChildTaxons = createSelector(getSearchState, fetchChildTaxons);
export const categeoryLevel = createSelector(getSearchState, fetchCategeoryLevel);
export const taxonomiByName = createSelector(getSearchState, fetchTaxonomiByName);
export const searchFilterStatus = createSelector(getSearchState, fetchSearchFliterStatus);

