import { Map, Record } from 'immutable';

export interface AuthState extends Map<string, any> {
  isAuthenticated: boolean;
}

export const AuthStateRecord = Record({
  isAuthenticated: false
});
