import { CheckoutState } from './checkout.state';
import { AppState } from './../../interfaces';
import { createSelector } from 'reselect';

// Base Cart State function
export function getCheckoutState(state: AppState): CheckoutState {
  return state.checkout;
}

// ******************** Individual selectors ***************************
export function fetchLineItems(state: CheckoutState) {
  return state.lineItems.toJS();
  // const ids = state.lineItemIds.toJS();
  // const lineItemEntitites = state.lineItemEntities.toJS();
  // return ids.map(id => lineItemEntitites[id]);
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

export function fetchOrderId(state: CheckoutState) {
  return state.orderId;
}

export function fetchPayments(state: CheckoutState) {
  return state.payments.toJS();
}

export function fetchPaymentEntities(state: CheckoutState) {
  return state.paymentEntities.toJS();
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
export const getOrderId = createSelector(getCheckoutState, fetchOrderId);
export const getPayments = createSelector(getCheckoutState, fetchPayments);
export const getPaymentEntities = createSelector(getCheckoutState, fetchPaymentEntities);
