import { Action } from '@ngrx/store';
import { AuthActions } from '../actions/auth.actions';
import { AuthState, AuthStateRecord } from './auth.state';

export const initialState: AuthState = new AuthStateRecord() as AuthState;

export function reducer(state = initialState, { type, payload }: Action & { payload }): AuthState {
  switch (type) {
    case AuthActions.LOGIN_SUCCESS:
      return state.merge({ isAuthenticated: true }) as AuthState;

    case AuthActions.LOGOUT_SUCCESS:
      return state.merge({
        isAuthenticated: false,
        currentUser: {}
      }) as AuthState;

    case AuthActions.GET_CURRENT_USER_SUCCESS:
      const _currentUser = payload;
      return state.merge({
        currentUser: _currentUser,
      }) as AuthState;

    default:
      return state;
  }
};
