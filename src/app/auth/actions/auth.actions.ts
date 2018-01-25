import { Action } from '@ngrx/store';

export class AuthActions {
  static LOGIN = 'LOGIN';
  static LOGIN_SUCCESS = 'LOGIN_SUCCESS';
  static LOGOUT = 'LOGOUT';
  static LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
  static AUTHORIZE = 'AUTHORIZE';

  authorize() {
    return { type: AuthActions.AUTHORIZE };
  }

  login() {
    return { type: AuthActions.LOGIN };
  }

  loginSuccess() {
    return { type: AuthActions.LOGIN_SUCCESS};
  }

  logout() {
    return { type: AuthActions.LOGOUT };
  }

  logoutSuccess() {
    return { type: AuthActions.LOGOUT_SUCCESS };
  }
}
