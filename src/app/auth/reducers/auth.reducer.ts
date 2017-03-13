import { Action, ActionReducer } from '@ngrx/store';
import { AuthActions } from '../actions/auth.actions';
import { AuthState, AuthStateRecord } from './auth.state';

export const initialState: AuthState = new AuthStateRecord() as AuthState;

export const authReducer: ActionReducer<AuthState> =
  (state: AuthState = initialState, { type, payload }: Action): AuthState => {
    switch (type) {

      case AuthActions.GET_AUTH_STATUS_SUCCESS:
        state.merge({ isAuthenticated: payload });
        return state as AuthState;

      case AuthActions.LOGIN_SUCCESS:
        state.merge({ isAuthenticated: true });
        return state as AuthState;

      case AuthActions.LOGOUT_SUCCESS:
        state.merge({ isAuthenticated: false });
        return state as AuthState;

      default:
        return state;
    }
  };
