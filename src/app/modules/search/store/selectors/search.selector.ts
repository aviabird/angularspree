import { SearchState } from './../states/search.state';
import { createFeatureSelector } from '@ngrx/store';
import { AppState } from '../../../../interfaces';
import { createSelector } from 'reselect';
import { Product } from '../../../../core/models';
import { SearchMetaInfo } from '../../models/search-param';

export const selectSearch = createFeatureSelector<AppState, SearchState>('search');

export const searchResponse = createSelector(selectSearch, state => {
  return {
    searchResults: state.searchResults as unknown as Array<Product>,
    meta: state.meta as unknown as SearchMetaInfo,
  }
})
