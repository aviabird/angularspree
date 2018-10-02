import { Map, Record, List } from 'immutable';

export interface AuthState extends Map<string, any> {
  isAuthenticated: boolean;
  currentUser: any,
  ratingCategories: List<Object>;
}

export const AuthStateRecord = Record({
  isAuthenticated: false,
  currentUser: Map({}),
  ratingCategories: List([])
});
