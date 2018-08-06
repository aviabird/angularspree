import { LayoutState } from './layout.state';
import { createFeatureSelector, createSelector } from '@ngrx/store';

/******************* Base Layout State ******************/
export const getLayoutState = createFeatureSelector<LayoutState>('layout');

export const getlayoutStateJS = createSelector(getLayoutState, state => state.toJS());

export const showMobileSearchBarowMobile = createSelector(
  getLayoutState,
  state => state.showMobileSearchBar
);
