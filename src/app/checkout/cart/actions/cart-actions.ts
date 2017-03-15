import { Order } from './../../../core/models/order';
import { Action } from '@ngrx/store';
import { LineItem } from './../../../core/models/line_item';

export class CartActions {
  static FETCH_CURRENT_ORDER = 'FETCH_CURRENT_ORDER';
  static FETCH_CURRENT_ORDER_SUCCESS = 'FETCH_CURRENT_ORDER_SUCCESS';
  static ADD_TO_CART = 'ADD_TO_CART';
  static ADD_TO_CART_SUCCESS = 'ADD_TO_CART_SUCCESS';
  static REMOVE_LINE_ITEM = 'REMOVE_LINE_ITEM';
  static REMOVE_LINE_ITEM_SUCCESS = 'REMOVE_LINE_ITEM_SUCCESS';
  static CHANGE_LINE_ITEM_QUANTITY = 'CHANGE_LINE_ITEM_QUANTITY';
  static PLACE_ORDER = 'PLACE_ORDER';

  fetchCurrentOrder() {
    return { type: CartActions.FETCH_CURRENT_ORDER };
  }

  fetchCurrentOrderSuccess(order: Order) {
    return {
      type: CartActions.FETCH_CURRENT_ORDER_SUCCESS,
      payload: order
    };
  }

  addToCart(variant_id: number): Action {
    return {
      type: CartActions.ADD_TO_CART,
      payload: variant_id
    };
  }

  addToCartSuccess(lineItem: LineItem): Action {
    return {
      type: CartActions.ADD_TO_CART_SUCCESS,
      payload: lineItem
    };
  }

  removeLineItem(lineItemId: number): Action {
    return {
      type: CartActions.REMOVE_LINE_ITEM,
      payload: lineItemId
    };
  }

  removeLineItemSuccess(lineItemId: number, quantity: number): Action {
    return {
      type: CartActions.REMOVE_LINE_ITEM_SUCCESS,
      payload: { quantity: quantity, id: lineItemId }
    };
  }

  changeLineItemQuantity(quantity: number, lineItemId: number): Action {
    return {
      type: CartActions.CHANGE_LINE_ITEM_QUANTITY,
      payload: { quantity, lineItemId }
    };
  }

  placeOrder(): Action {
    return { type: CartActions.PLACE_ORDER };
  }

}
