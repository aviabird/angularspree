import { UserState, UserStateRecord } from './user.state';
import { UserActions } from '../actions/user.actions';

export const initialState: UserState = new UserStateRecord() as unknown as UserState;

export function reducer(state = initialState, { type, payload }: any): UserState {
  switch (type) {
    case UserActions.GET_USER_ORDERS_SUCCESS:
      return state.merge({ orders: payload }) as UserState;

    case UserActions.GET_USER_FAVORITE_PRODUCTS_SUCCESS:
      return state.merge({ favorite_products: payload }) as UserState;

    case UserActions.REMOVE_FROM_FAVORITE_PRODUCTS:
      const deletedId = payload;
      const products = state.favorite_products;
      const productToRemove = products.filter((product) => product.id !== deletedId);

      return state.merge({ favorite_products: productToRemove }) as UserState;

    case UserActions.FETCH_USER_ADDRESS_SUCCEESS:
      return state.merge({ userAddresses: payload }) as UserState;

    case UserActions.FETCH_COUNTRIES_SUCCEESS:
      return state.merge({ countries: payload }) as UserState;

    case UserActions.FETCH_STATES_SUCCEESS:
      return state.merge({ states: payload.states }) as UserState;

    default:
      return state;
  }
};
