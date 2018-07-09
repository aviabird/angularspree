import { UserState, UserStateRecord } from './user.state';
import { UserActions } from '../actions/user.actions';

export const initialState: UserState = new UserStateRecord() as UserState;

export function reducer(state = initialState, { type, payload }: any): UserState {
  switch (type) {
    case UserActions.GET_USER_ORDERS_SUCCESS:
      return state.merge({ orders: payload }) as UserState;

    case UserActions.GET_USER_FAVORITE_PRODUCTS_SUCCESS:
      return state.merge({ favorite_products: payload }) as UserState;

    case UserActions.REMOVE_FROM_FAVORITE_PRODUCTS:
      const deletedId = payload;
      let products = state.toJS().favorite_products;
      products = products.filter((product) => product.id !== deletedId);

      return state.merge({ favorite_products: products }) as UserState;

    default:
      return state;
  }
};
