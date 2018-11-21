import { Action } from '@ngrx/store';
import { AuthActions } from '../actions/auth.actions';
import { AuthState, AuthStateRecord } from './auth.state';

export const initialState: AuthState = new AuthStateRecord() as unknown as AuthState;

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

    case AuthActions.GET_RATING_CATEGEORY_SUCCESS:
      const ratingCategoryList = payload
      const _ratingCategories = {}
      ratingCategoryList.forEach(element => {
        _ratingCategories[element.code] = element.id;
      })
      return state.merge({
        ratingCategories: _ratingCategories
      }) as AuthState;

    default:
      return state;
  }
};
