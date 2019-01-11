import { Action } from '@ngrx/store';

export enum SearchActionTypes {
  ApplySearchParams = '[Search] Apply Search Params',
  LoadSearchResults = '[Search] Loaded Search Results'
}

export class ApplySearchParams implements Action {
  readonly type = SearchActionTypes.ApplySearchParams;
}

export class LoadSearchResults implements Action {
  readonly type = SearchActionTypes.LoadSearchResults;
}

export type SearchActions = ApplySearchParams | LoadSearchResults;
