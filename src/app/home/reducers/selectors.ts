import { Brand } from './../../core/models/brand';
import { Taxon } from './../../core/models/taxon';
import { Product } from './../../core/models/product';
import { HomeState } from './index';
import { SearchState } from './search.state';
import { createSelector, createFeatureSelector } from '@ngrx/store';
import { Taxonomy } from '../../core/models/taxonomy';

/******************* Base Search State ******************/
export const getHomeState = createFeatureSelector<HomeState>('home');
export const getSearchState = createSelector(
  getHomeState,
  (state: HomeState) => state.search
);

/******************* Individual selectors ******************/
const fetchSelectedFilters = (state: SearchState) => state.selectedFilters;
const fetchSelectedTaxonIds = (state: SearchState) => state.selectedTaxonIds as unknown as number[];
const fetchProductsByKeyword = (state: SearchState) => state.productsByKeyword as unknown as Product[];
const fetchChildTaxons = (state: SearchState) => state.getChildTaxons as unknown as Taxon[] & Taxonomy[];
const fetchCategeoryLevel = (state: SearchState) => state.categeoryLevel;
const fetchTaxonomiByName = (state: SearchState) => state.taxonomiByName as unknown as Taxonomy[] & Brand[];
const fetchPaginationData = (state: SearchState) => state.paginationData;
const fetchSearchFliterStatus = (state: SearchState) => state.searchFilter;
const fetchSearchFliterKeyword = (state: SearchState) => state.searchKeyword;

/******************* Public Selector API's ******************/
export const getFilters = createSelector(getSearchState, fetchSelectedFilters);
export const getSelectedTaxonIds = createSelector(getSearchState, fetchSelectedTaxonIds);
export const getProductsByKeyword = createSelector(getSearchState, fetchProductsByKeyword);
export const getPaginationData = createSelector(getSearchState, fetchPaginationData);
export const getChildTaxons = createSelector(getSearchState, fetchChildTaxons);
export const categeoryLevel = createSelector(getSearchState, fetchCategeoryLevel);
export const taxonomiByName = createSelector(getSearchState, fetchTaxonomiByName);
export const searchFilterStatus = createSelector(getSearchState, fetchSearchFliterStatus);
export const searchKeyword = createSelector(getSearchState, fetchSearchFliterKeyword);

