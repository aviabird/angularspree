import { Action } from '@ngrx/store';

export class AuthActions {
  static LOGIN = 'LOGIN';
  static LOGIN_SUCCESS = 'LOGIN_SUCCESS';
  static LOGOUT = 'LOGOUT';
  static LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
  static AUTHORIZE = 'AUTHORIZE';
  static O_AUTH_LOGIN = 'O_AUTH_LOGIN';
  static NO_OP = 'NO_OPERATION'

  authorize(): Action {
    return { type: AuthActions.AUTHORIZE };
  }

  login(): Action {
    return { type: AuthActions.LOGIN };
  }

  oAuthLogin(provider: string): Action {
    return {
      type: AuthActions.O_AUTH_LOGIN,
      payload: provider
    };
  }

  loginSuccess(): Action {
    return { type: AuthActions.LOGIN_SUCCESS};
  }

  logout(): Action {
    return { type: AuthActions.LOGOUT };
  }

  logoutSuccess(): Action {
    return { type: AuthActions.LOGOUT_SUCCESS };
  }

  noOp(): Action {
    return { type: AuthActions.NO_OP };
  }
}
