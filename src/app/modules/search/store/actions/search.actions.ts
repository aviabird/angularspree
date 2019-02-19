import {
  SearchAppliedParams,
  SearchResponse
} from './../../models/search-param';
import { Action } from '@ngrx/store';
import { Product } from '../../../../core/models';

export enum SearchActionTypes {
  ApplySearchParams = '[Search] Apply Search Params',
  LoadedSearchResults = '[Search] Loaded Search Results'
}

export class ApplySearchParams implements Action {
  readonly type = SearchActionTypes.ApplySearchParams;
  constructor(public payload: SearchAppliedParams) {}
}

export class LoadedSearchResults implements Action {
  readonly type = SearchActionTypes.LoadedSearchResults;
  constructor(public payload: SearchResponse) {}
}

export type SearchActions = ApplySearchParams | LoadedSearchResults;
