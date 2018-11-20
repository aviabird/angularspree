import { Address } from './../../core/models/address';
import { LineItem } from './../../core/models/line_item';
import { CheckoutState } from './checkout.state';
import { AppState } from './../../interfaces';
import { createSelector } from 'reselect';
import { Payment } from '../../core/models/payment';

// Base Cart State function
const getCheckoutState = (state: AppState): CheckoutState => state.checkout;

// ******************** Individual selectors ***************************
const fetchLineItems = (state: CheckoutState): LineItem[] => {
  return state.lineItems as unknown as LineItem[];
}
const fetchOrderNumber = (state: CheckoutState): string => state.orderNumber;
const fetchTotalCartItems = (state: CheckoutState): number => state.totalCartItems;
const fetchTotalCartValue = (state: CheckoutState): number => state.totalCartValue;
const fetchShipAddress = (state: CheckoutState): Address => {
  return (state.shipAddress ? state.shipAddress : state.shipAddress) as Address;
}
const fetchBillAddress = (state: CheckoutState): Address => {
  return (state.billAddress ? state.billAddress : state.billAddress) as Address;
}
const fetchOrderState = (state: CheckoutState): string => state.orderState;
const fetchShipTotal = (state: CheckoutState): number => state.shipTotal;
const fetchItemTotal = (state: CheckoutState): number => state.itemTotal;
const fetchAdjustmentTotal = (state: CheckoutState): number => state.adjustmentTotal;
const fetchOrderId = (state: CheckoutState): number => state.orderId;
const fetchPayments = (state: CheckoutState): Payment[] => state.payments as unknown as Payment[];
const fetchPaymentEntities = (state: CheckoutState) => state.paymentEntities;
const fetchIsPaymentAdded = (state: CheckoutState): boolean => state.isPaymentAdded;

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
export const getIsPaymentAdded = createSelector(getCheckoutState, fetchIsPaymentAdded);
