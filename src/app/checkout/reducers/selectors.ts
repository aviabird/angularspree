import { CheckoutState } from './checkout.state';
import { AppState } from './../../interfaces';
import { createSelector } from 'reselect';
import { Map, Record, List, fromJS } from 'immutable';

// Base Cart State function
export function getCheckoutState(state: AppState): CheckoutState {
  return state.checkout;
}

// ******************** Individual selectors ***************************
export function fetchLineItems(state: CheckoutState) {
  const ids = state.lineItemIds.toJS();
  const lineItemEntitites = state.lineItemEntities.toJS();
  return ids.map(id => lineItemEntitites[id]);
}

export function fetchOrderNumber(state: CheckoutState) {
  return state.orderNumber;
}

export function fetchTotalCartItems(state: CheckoutState) {
  return state.totalCartItems;
}

export function fetchTotalCartValue(state: CheckoutState) {
  return state.totalCartValue;
}

export function fetchShipAddress(state: CheckoutState) {
  return state.shipAddress ? state.shipAddress.toJS() : state.shipAddress;
}

export function fetchBillAddress(state: CheckoutState) {
  return state.billAddress ? state.billAddress.toJS() : state.billAddress;
}

export function fetchOrderState(state: CheckoutState) {
  return state.orderState;
}
export function fetchShipTotal(state: CheckoutState) {
  return state.shipTotal;
}

export function fetchItemTotal(state: CheckoutState) {
  return state.itemTotal;
}

export function fetchAdjustmentTotal(state: CheckoutState) {
  return state.adjustmentTotal;
}
// *************************** PUBLIC API's ****************************
export const getLineItems = createSelector(getCheckoutState, fetchLineItems);
export const getOrderNumber = createSelector(getCheckoutState, fetchOrderNumber);
export const getTotalCartItems = createSelector(getCheckoutState, fetchTotalCartItems);
export const getTotalCartValue = createSelector(getCheckoutState, fetchTotalCartValue);
export const getShipAddress = createSelector(getCheckoutState, fetchShipAddress);
export const getBillAddress = createSelector(getCheckoutState, fetchBillAddress);
export const getOrderState = createSelector(getCheckoutState, fetchOrderState);
export const getShipTotal = createSelector(getCheckoutState, fetchShipTotal);
export const getItemTotal = createSelector(getCheckoutState, fetchItemTotal);
export const getAdjustmentTotal = createSelector(getCheckoutState, fetchAdjustmentTotal);
