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

export function fetchOrderNumber(state: CartState) {
  return state.orderNumber;
}

export function fetchTotalCartItems(state: CartState) {
  return state.totalCartItems;
}

// *************************** PUBLIC API's ****************************
export const getLineItems = createSelector(getCartState, fetchLineItems);
export const getOrderNumber = createSelector(getCartState, fetchOrderNumber);
export const getTotalCartItems = createSelector(getCartState, fetchTotalCartItems);
