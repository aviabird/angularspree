import { LineItem } from './../../core/models/line_item';
import { Order } from './../../core/models/order';
import { Action } from '@ngrx/store';

export class CheckoutActions {
  static FETCH_CURRENT_ORDER = 'FETCH_CURRENT_ORDER';
  static FETCH_CURRENT_ORDER_SUCCESS = 'FETCH_CURRENT_ORDER_SUCCESS';
  static ADD_TO_CART = 'ADD_TO_CART';
  static ADD_TO_CART_SUCCESS = 'ADD_TO_CART_SUCCESS';
  static REMOVE_LINE_ITEM = 'REMOVE_LINE_ITEM';
  static REMOVE_LINE_ITEM_SUCCESS = 'REMOVE_LINE_ITEM_SUCCESS';
  static CHANGE_LINE_ITEM_QUANTITY = 'CHANGE_LINE_ITEM_QUANTITY';
  static PLACE_ORDER = 'PLACE_ORDER';
  static CHANGE_ORDER_STATE = 'CHANGE_ORDER_STATE';
  static CHANGE_ORDER_STATE_SUCCESS = 'CHANGE_ORDER_STATE_SUCCESS';
  static UPDATE_ORDER = 'UPDATE_ORDER';
  static UPDATE_ORDER_SUCCESS = 'UPDATE_ORDER_SUCCESS';
  static ORDER_COMPLETE_SUCCESS = 'ORDER_COMPLETE_SUCCESS';
  static GET_ORDER_DETAILS = 'GET_ORDER_DETAILS';
  static GET_ORDER_DETAILS_SUCCESS = 'GET_ORDER_DETAILS_SUCCESS';

  fetchCurrentOrder() {
    return { type: CheckoutActions.FETCH_CURRENT_ORDER };
  }

  fetchCurrentOrderSuccess(order: Order) {
    return {
      type: CheckoutActions.FETCH_CURRENT_ORDER_SUCCESS,
      payload: order
    };
  }

  addToCart(variant_id: number, quantity: number) {
    return {
      type: CheckoutActions.ADD_TO_CART,
      payload: { variant_id, quantity }
    };
  }

  addToCartSuccess(lineItem: LineItem) {
    return {
      type: CheckoutActions.ADD_TO_CART_SUCCESS,
      payload: lineItem
    };
  }

  removeLineItem(lineItemId: number) {
    return {
      type: CheckoutActions.REMOVE_LINE_ITEM,
      payload: lineItemId
    };
  }

  removeLineItemSuccess(lineItem: LineItem) {
    return {
      type: CheckoutActions.REMOVE_LINE_ITEM_SUCCESS,
      payload: lineItem
    };
  }

  changeLineItemQuantity(quantity: number, lineItemId: number) {
    return {
      type: CheckoutActions.CHANGE_LINE_ITEM_QUANTITY,
      payload: { quantity, lineItemId }
    };
  }

  placeOrder() {
    return { type: CheckoutActions.PLACE_ORDER };
  }

  changeOrderState() {
    return { type: CheckoutActions.CHANGE_ORDER_STATE };
  }

  changeOrderStateSuccess(order: Order) {
    return {
      type: CheckoutActions.CHANGE_ORDER_STATE_SUCCESS,
      payload: order
    };
  }

  updateOrder() {
    return { type: CheckoutActions.UPDATE_ORDER };
  }

  updateOrderSuccess(order: Order) {
    return {
      type: CheckoutActions.UPDATE_ORDER_SUCCESS,
      payload: order
    };
  }

  orderCompleteSuccess() {
    return { type: CheckoutActions.ORDER_COMPLETE_SUCCESS };
  }

  getOrderDetails(order_number: any) {
    return {
      type: CheckoutActions.GET_ORDER_DETAILS,
      payload: order_number
    }
  }

  getOrderDetailsSuccess(order: Order) {
    return {
      type: CheckoutActions.GET_ORDER_DETAILS,
      payload: order
    }
  }
}
