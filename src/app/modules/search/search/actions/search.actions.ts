import { Action } from '@ngrx/store';

export enum SearchActionTypes {
  LoadSearchs = '[Search] Load Searchs'
}

export class LoadSearchs implements Action {
  readonly type = SearchActionTypes.LoadSearchs;
}

export type SearchActions = LoadSearchs;
