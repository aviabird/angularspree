import { CartState } from './cart-state';
import { AppState } from './../../../interfaces';
import { createSelector } from 'reselect';

// Base Cart State function
export function getCartState(state: AppState): CartState {
  return state.cart;
}

// ******************** Individual selectors ***************************
export function fetchLineItems(state: CartState) {
  const ids = state.lineItemIds.toJS();
  const lineItemEntitites = state.lineItemEntities.toJS();
  return ids.map(id => lineItemEntitites[id]);
}

// *************************** PUBLIC API's ****************************
export const getLineItems = createSelector(getCartState, fetchLineItems);
