import { LineItem } from './../../../core/models/line_item';
import { CartActions } from './../actions/cart-actions';
import { Action, ActionReducer } from '@ngrx/store';
import { CartState, CartStateRecord } from './cart-state';


export const initialState: CartState = new CartStateRecord() as CartState;

export const cartReducer: ActionReducer<CartState> =
  (state: CartState = initialState, { type, payload }: Action): CartState => {

    let _lineItems, _lineItemEntities, _lineItemIds, _lineItem, _lineItemEntity, _lineItemId;

    switch (type) {

      case CartActions.FETCH_CURRENT_ORDER_SUCCESS:
        const _orderNumber = payload.number;
        let _totalCartItems = 0;
        _lineItems = payload.line_items;
        _lineItemIds = _lineItems.map(lineItem => lineItem.id);
        _lineItems.forEach((lineItem) => {
          _totalCartItems += lineItem.quantity;
        });


        _lineItemEntities = _lineItems.reduce((lineItems: { [id: number]: LineItem }, lineItem: LineItem) => {
          return Object.assign(lineItems, {
            [lineItem.id]: lineItem
          });
        }, { });

        return state.merge({
          orderNumber: _orderNumber,
          lineItemIds: _lineItemIds,
          lineItemEntities: _lineItemEntities,
          totalCartItems: _totalCartItems
        }) as CartState;

      case CartActions.ADD_TO_CART_SUCCESS:
        _lineItem = payload;
        _lineItemId = _lineItem.id;

        // return the same state if the item is already included.
        if (state.lineItemIds.includes(_lineItemId)) {
          return state;
        }


        _totalCartItems = state.totalCartItems + _lineItem.quantity;
        _lineItemEntity = { [_lineItemId]: _lineItem };
        _lineItemIds = state.lineItemIds.push(_lineItemId);

        return state.merge({
          lineItemIds: _lineItemIds,
          lineItemEntities: state.lineItemEntities.merge(_lineItemEntity),
          totalCartItems: _totalCartItems
        }) as CartState;

      // case CartActions.REMOVE_LINE_ITEM:
      //   lineItemId = payload;
      //   const index = state.lineItemIds.indexOf(lineItemId);
      //   state.lineItemIds.splice(index, 1);
      //   delete state.lineItemEntities['lineItemId'];

      // return state;

      // case CartActions.CHANGE_LINE_ITEM_QUANTITY:
      //   const quantity = payload.quantity;
      //   lineItemId = payload.lineItemId;
      //   _lineItemEntities = state.lineItemEntities;
      //   _lineItemEntities[lineItemId][quantity] = quantity;

      //   return state.merge({
      //     lineItemEntities: _lineItemEntities
      //   }) as CartState;

      default:
        return state;
    }
  };
