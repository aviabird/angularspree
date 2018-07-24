import { LineItem } from './../../core/models/line_item';
import { CheckoutActions } from './../actions/checkout.actions';
import { CheckoutState, CheckoutStateRecord } from './checkout.state';

export const initialState: CheckoutState = new CheckoutStateRecord() as CheckoutState;

export function reducer(state = initialState, { type, payload }: any): CheckoutState {

  let _lineItems, _lineItemEntities, _lineItemIds,
    _lineItem, _lineItemEntity, _lineItemId,
    _totalCartItems = 0, _totalCartValue,
    _ship_address, _bill_address,
    _orderState, _shipTotal = 0, _itemTotal, _adjustmentTotal;

  switch (type) {

    case CheckoutActions.FETCH_CURRENT_ORDER_SUCCESS:
      const _orderNumber = payload.number;
      _lineItems = payload.line_items;
      _lineItemIds = _lineItems.map(lineItem => lineItem.id);
      _totalCartItems = payload.total_quantity;
      _totalCartValue = parseFloat(payload.total);
      _ship_address = payload.ship_address;
      _bill_address = payload.bill_address;
      _orderState = payload.state;
      _shipTotal = payload.ship_total;
      _itemTotal = parseFloat(payload.item_total);
      _adjustmentTotal = payload.display_adjustment_total;

      _lineItemEntities = _lineItems.reduce((lineItems: { [id: number]: LineItem }, lineItem: LineItem) => {
        return Object.assign(lineItems, {
          [lineItem.id]: lineItem
        });
      }, {});

      return state.merge({
        orderNumber: _orderNumber,
        orderState: _orderState,
        lineItemIds: _lineItemIds,
        lineItemEntities: _lineItemEntities,
        totalCartItems: _totalCartItems,
        totalCartValue: _totalCartValue,
        shipAddress: _ship_address,
        billAddress: _bill_address,
        shipTotal: _shipTotal,
        itemTotal: _itemTotal,
        adjustmentTotal: _adjustmentTotal
      }) as CheckoutState;

    case CheckoutActions.ADD_TO_CART_SUCCESS:
      _lineItem = payload;
      _lineItemId = _lineItem.id;

      // TODO : @Refactor this code later
      // return the same state if the item is already included.
      if (state.lineItemIds.includes(_lineItemId)) {
        _totalCartItems = state.totalCartItems + _lineItem.quantity - state.lineItemEntities.toJS()[_lineItemId].quantity;
        _totalCartValue = state.totalCartValue + parseFloat(_lineItem.total) - state.lineItemEntities.toJS()[_lineItemId].total;
        _itemTotal = state.itemTotal + parseFloat(_lineItem.total) - state.lineItemEntities.toJS()[_lineItemId].total;
        _lineItemEntity = { [_lineItemId]: _lineItem };
        _shipTotal = state.shipTotal

        return state.merge({
          lineItemEntities: state.lineItemEntities.merge(_lineItemEntity),
          totalCartItems: _totalCartItems,
          totalCartValue: _totalCartValue,
          itemTotal: _itemTotal,
          shipTotal: _shipTotal
        }) as CheckoutState;
      }

      _totalCartItems = state.totalCartItems + _lineItem.quantity;
      _totalCartValue = state.totalCartValue + parseFloat(_lineItem.total);
      _itemTotal = state.itemTotal + parseFloat(_lineItem.total);
      _lineItemEntity = { [_lineItemId]: _lineItem };
      _lineItemIds = state.lineItemIds.push(_lineItemId);
      _shipTotal = state.shipTotal

      return state.merge({
        lineItemIds: _lineItemIds,
        lineItemEntities: state.lineItemEntities.merge(_lineItemEntity),
        totalCartItems: _totalCartItems,
        totalCartValue: _totalCartValue,
        shipTotal: _shipTotal,
        itemTotal: _itemTotal
      }) as CheckoutState;

    case CheckoutActions.REMOVE_LINE_ITEM_SUCCESS:
      _lineItem = payload;
      _lineItemId = _lineItem.id;
      const index = state.lineItemIds.indexOf(_lineItemId);
      if (index >= 0) {
        _lineItemIds = state.lineItemIds.splice(index, 1);
        _lineItemEntities = state.lineItemEntities.delete(_lineItemId);
        _totalCartItems = state.totalCartItems - _lineItem.quantity;
        _totalCartValue = state.totalCartValue - parseFloat(_lineItem.total);
        _itemTotal = state.itemTotal - parseFloat(_lineItem.total);
        _shipTotal = state.shipTotal
      }

      return state.merge({
        lineItemIds: _lineItemIds,
        lineItemEntities: _lineItemEntities,
        totalCartItems: _totalCartItems,
        totalCartValue: _totalCartValue,
        itemTotal: _itemTotal,
        shipTotal: _shipTotal
      }) as CheckoutState;

    // case CheckoutActions.CHANGE_LINE_ITEM_QUANTITY:
    //   const quantity = payload.quantity;
    //   lineItemId = payload.lineItemId;
    //   _lineItemEntities = state.lineItemEntities;
    //   _lineItemEntities[lineItemId][quantity] = quantity;

    //   return state.merge({
    //     lineItemEntities: _lineItemEntities
    //   }) as CheckoutState;

    // case CheckoutActions.CHANGE_ORDER_STATE:

    case CheckoutActions.CHANGE_ORDER_STATE_SUCCESS:
      _orderState = payload.state;
      _ship_address = payload.ship_address;
      _bill_address = payload.bill_address;

      return state.merge({
        orderState: _orderState,
        shipAddress: _ship_address,
        billAddress: _bill_address,

      }) as CheckoutState;

    case CheckoutActions.UPDATE_ORDER_SUCCESS:
      _orderState = payload.state;
      _totalCartItems = payload.total_quantity;
      _totalCartValue = parseFloat(payload.total);
      _ship_address = payload.ship_address;
      _bill_address = payload.bill_address;
      _orderState = payload.state;
      _shipTotal = payload.ship_total;
      _itemTotal = parseFloat(payload.item_total);
      _adjustmentTotal = payload.display_adjustment_total;
      _lineItems = payload.line_items;
      _lineItemIds = _lineItems.map(lineItem => lineItem.id);

      _lineItemEntities = _lineItems.reduce((lineItems: { [id: number]: LineItem }, lineItem: LineItem) => {
        return Object.assign(lineItems, {
          [lineItem.id]: lineItem
        });
      }, {});

      return state.merge({
        orderState: _orderState,
        totalCartItems: _totalCartItems,
        totalCartValue: _totalCartValue,
        shipAddress: _ship_address,
        billAddress: _bill_address,
        shipTotal: _shipTotal,
        itemTotal: _itemTotal,
        adjustmentTotal: _adjustmentTotal,
        lineItemIds: _lineItemIds,
        lineItemEntities: _lineItemEntities,
      }) as CheckoutState;

    case CheckoutActions.ORDER_COMPLETE_SUCCESS:
      return initialState;

    default:
      return state;
  }
};


