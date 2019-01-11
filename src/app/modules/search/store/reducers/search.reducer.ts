import { Action } from '@ngrx/store';
import { SearchActions, SearchActionTypes } from '../actions/search.actions';

export interface State {

}

export const initialState: State = {

};

export function reducer(state = initialState, action: SearchActions): State {
  switch (action.type) {

    case SearchActionTypes.LoadSearchResults:
      return state;


    default:
      return state;
  }
}
