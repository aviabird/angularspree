import { Map, Record } from 'immutable';

export interface AuthState extends Map<string, any> {
  isAuthenticated: boolean;
  currentUser: any,
}

export const AuthStateRecord = Record({
  isAuthenticated: false,
  currentUser: Map({}),
});
