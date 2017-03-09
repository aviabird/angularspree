import { HomeState } from './home/reducers/home-state';

// This should hold the AppState interface
// Ideally importing all the substate for the application
export interface AppState {
  home: HomeState;
}
