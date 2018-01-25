import * as fromRoot from '../../interfaces';
import { SearchState } from './search.state';
import * as fromSearch from './search.reducers';

export interface HomeState {
  search: SearchState;
}

export interface State extends fromRoot.AppState {
  'home': HomeState;
}

export const reducers = {
  search: fromSearch.reducer
};
