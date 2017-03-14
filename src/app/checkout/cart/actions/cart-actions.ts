import { Action } from '@ngrx/store';
import { LineItem } from './../../../core/models/line_item';

export class CartActions {
  static ADD_LINE_ITEM = 'ADD_LINE_ITEM';
  static REMOVE_LINE_ITEM = 'REMOVE_LINE_ITEM';
  static CHANGE_LINE_ITEM_QUANTITY = 'CHANGE_LINE_ITEM_QUANTITY';
  static PLACE_ORDER = 'PLACE_ORDER';

  addLineItem(lineItem: LineItem): Action {
    return {
      type: CartActions.ADD_LINE_ITEM,
      payload: lineItem
    };
  }

  removeLineItem(lineItemId: number): Action {
    return {
      type: CartActions.REMOVE_LINE_ITEM,
      payload: lineItemId
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
