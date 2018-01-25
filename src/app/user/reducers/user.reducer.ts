import { Action, ActionReducer } from '@ngrx/store';
import { UserState, UserStateRecord } from './user.state';
import { UserActions } from '../actions/user.actions';

export const initialState: UserState = new UserStateRecord() as UserState;

export function reducer(state = initialState, { type, payload }: any): UserState {
    switch (type) {
      case UserActions.GET_USER_ORDERS_SUCCESS:
        return state.merge({ orders: payload }) as UserState;

      default:
        return state;
    }
  };
