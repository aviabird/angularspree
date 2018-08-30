import { Map, Record } from 'immutable';
import { User } from '../../core/models/user';

export interface AuthState extends Map<string, any> {
  isAuthenticated: boolean;
  currentUser: any,
}

export const AuthStateRecord = Record({
  isAuthenticated: false,
  currentUser: Map({}),
});
