import { SearchState } from './../states/search.state';
import { SearchActions, SearchActionTypes } from '../actions/search.actions';
import { SearchStateRecord } from '../states/search.state';

export const initialState: SearchState = (new SearchStateRecord() as unknown) as SearchState;

export function reducer(
  state = initialState,
  action: SearchActions
): SearchState {
  switch (action.type) {
    case SearchActionTypes.ApplySearchParams:
      return state.merge({
        searchAppliedParams: action.payload,
        isLoading: true
      }) as SearchState;

    case SearchActionTypes.LoadedSearchResults:
      return state.merge({
        isLoading: false,
        searchResults: action.payload.data,
        metaInfo: action.payload.meta
      }) as SearchState;

    default:
      return state;
  }
}
