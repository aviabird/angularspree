import { Action } from '@ngrx/store';

export class AuthActions {
  static GET_AUTH_STATUS = 'GET_AUTH_STATUS';
  static GET_AUTH_STATUS_SUCCESS = 'GET_AUTH_STATUS';
  static LOGIN = 'LOGIN';
  static LOGIN_SUCCESS = 'LOGIN';
  static LOGOUT = 'LOGOUT';
  static LOGOUT_SUCCESS = 'LOGOUT';

  getAuthStatus(): Action {
    return { type: AuthActions.GET_AUTH_STATUS };
  }

  getAuthStatusSuccess(): Action {
    return { type: AuthActions.GET_AUTH_STATUS_SUCCESS }
  }

  login(): Action {
    return { type: AuthActions.LOGIN };
  }

  loginSuccess(): Action {
    return { type: AuthActions.LOGIN_SUCCESS}
  }

  logout(): Action {
    return { type: AuthActions.LOGOUT };
  }

  logoutSuccess(): Action {
    return { type: AuthActions.LOGOUT_SUCCESS };
  }
}
