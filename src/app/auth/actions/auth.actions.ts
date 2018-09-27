import { User } from '../../core/models/user';
import { RatingCategory } from '../../core/models/rating_category';
export class AuthActions {
  static LOGIN = 'LOGIN';
  static LOGIN_SUCCESS = 'LOGIN_SUCCESS';
  static LOGOUT = 'LOGOUT';
  static LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
  static AUTHORIZE = 'AUTHORIZE';
  static O_AUTH_LOGIN = 'O_AUTH_LOGIN';
  static NO_OP = 'NO_OPERATION'
  static FORGET_PASSWORD = 'FORGET_PASSWORD';
  static FORGET_PASSWORD_SUCCESS = 'FORGET_PASSWORD_SUCCESS';
  static UPDATE_PASSWORD = 'UPDATE_PASSWORD';
  static UPDATE_PASSWORD_SUCCESS = 'UPDATE_PASSWORD_SUCCESS';
  static GET_CURRENT_USER = 'GET_CURRENT_USER';
  static GET_CURRENT_USER_SUCCESS = 'GET_CURRENT_USER_SUCCESS';
  static GET_RATING_CATEGEORY = 'GET_RATING_CATEGEORY';
  static GET_RATING_CATEGEORY_SUCCESS = 'GET_RATING_CATEGEORY_SUCCESS';


  authorize() {
    return { type: AuthActions.AUTHORIZE };
  }

  login() {
    return { type: AuthActions.LOGIN };
  }

  oAuthLogin(provider: string) {
    return {
      type: AuthActions.O_AUTH_LOGIN,
      payload: provider
    };
  }
  forgetPasswordSuccess() {
    return { type: AuthActions.FORGET_PASSWORD_SUCCESS };
  }
  forgetPassword() {
    return { type: AuthActions.FORGET_PASSWORD };
  }

  updatePasswordSuccess() {
    return { type: AuthActions.UPDATE_PASSWORD_SUCCESS };
  }
  updatePassword() {
    return { type: AuthActions.UPDATE_PASSWORD };
  }

  loginSuccess() {
    return { type: AuthActions.LOGIN_SUCCESS };
  }

  logout() {
    return { type: AuthActions.LOGOUT };
  }

  logoutSuccess() {
    return { type: AuthActions.LOGOUT_SUCCESS };
  }

  noOp() {
    return { type: AuthActions.NO_OP };
  }

  getCurrentUser(token) {
    return {
      type: AuthActions.GET_CURRENT_USER,
      payload: token
    }
  }

  getCurrentUserSuccess(user: User) {
    return {
      type: AuthActions.GET_CURRENT_USER_SUCCESS,
      payload: user
    }
  }

  getRatingCategories() {
    return {
      type: AuthActions.GET_RATING_CATEGEORY
    }
  }

  getRatingCategoriesSuccess(ratingCategories: Array<RatingCategory>) {
    return {
      type: AuthActions.GET_RATING_CATEGEORY_SUCCESS,
      payload: ratingCategories
    }
  }
}
