import { CartActions } from './../actions/cart-actions';
import { Action, ActionReducer } from '@ngrx/store';
import { CartState, CartStateRecord } from './cart-state';


export const initialState: CartState = new CartStateRecord() as CartState;

export const cartReducer: ActionReducer<CartState> =
  (state: CartState = initialState, { type, payload }: Action): CartState => {

    let lineItem, lineItemId;

    switch (type) {
      case CartActions.ADD_LINE_ITEM:
        lineItem = payload;
        lineItemId = lineItem.id;
        const lineItemEntity = { [lineItemId]: lineItem };
        const _lineItemIds = state.lineItemIds.push(lineItemId);

        return state.merge({
          lineItemIds: _lineItemIds,
          lineItemEntities: Object.assign({}, state.lineItemEntities, lineItemEntity)
        }) as CartState;

      case CartActions.REMOVE_LINE_ITEM:
        lineItemId = payload;
        const index = state.lineItemIds.indexOf(lineItemId);
        state.lineItemIds.splice(index, 1);
        delete state.lineItemEntities['lineItemId'];

      return state;

      case CartActions.CHANGE_LINE_ITEM_QUANTITY:
        const quantity = payload.quantity;
        lineItemId = payload.lineItemId;
        const _lineItemEntities = state.lineItemEntities;
        _lineItemEntities[lineItemId][quantity] = quantity;

        return state.merge({
          lineItemEntities: _lineItemEntities
        }) as CartState;

      default:
        return state;
    }
  };
