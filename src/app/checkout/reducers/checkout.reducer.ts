import { LineItem } from './../../core/models/line_item';
import { CheckoutActions } from './../actions/checkout.actions';
import { CheckoutState, CheckoutStateRecord } from './checkout.state';
import { Payment } from '../../core/models/payment';

export const initialState: CheckoutState = new CheckoutStateRecord() as CheckoutState;

export function reducer(state = initialState, { type, payload }: any): CheckoutState {

  let _lineItems, _lineItemEntities, _lineItemIds,
    _lineItem, _lineItemEntity, _lineItemId,
    _totalCartItems = 0, _totalCartValue,
    _ship_address, _bill_address,
    _orderState, _shipTotal = 0, _itemTotal, _adjustmentTotal,
    _paymentEntities, _payments, _paymentIds;

  switch (type) {

    case CheckoutActions.FETCH_CURRENT_ORDER_SUCCESS:
      const _orderNumber = payload.number;
      const _orderId = payload.id;
      _lineItems = payload.line_items;
      _lineItemIds = _lineItems.map(lineItem => lineItem.id);
      _totalCartItems = payload.item_count;
      _totalCartValue = parseFloat(payload.order_total_amount.amount);
      _ship_address = payload.shipping_address;
      _bill_address = payload.billing_address;
      _orderState = payload.state;
      _shipTotal = payload.ship_total;
      _itemTotal = parseFloat(payload.order_total_amount.amount);
      _adjustmentTotal = payload.display_adjustment_total;

      _lineItemEntities = _lineItems.reduce((lineItems: { [id: number]: LineItem }, lineItem: LineItem) => {
        return Object.assign(lineItems, {
          [lineItem.id]: lineItem
        });
      }, {});

      return state.merge({
        orderNumber: _orderNumber,
        orderId: _orderId,
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
      // _totalCartItems = payload.quantity
      // _itemTotal = payload.total_price
      return state.merge({
        // totalCartItems: _totalCartItems,
        // itemTotal: _itemTotal
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

    case CheckoutActions.GET_ORDER_DETAILS_SUCCESS:
      _orderState = payload.state;
      _totalCartItems = payload.item_count;
      _totalCartValue = parseFloat(payload.order_total_amount.amount);
      _ship_address = payload.shipping_address;
      _bill_address = payload.billing_address;
      _orderState = payload.state;
      _shipTotal = payload.ship_total;
      _itemTotal = parseFloat(payload.order_total_amount.amount);
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
        lineItems: _lineItems,
        lineItemEntities: _lineItemEntities,
      }) as CheckoutState;

    case CheckoutActions.GET_ORDER_PAYMENT_SUCCESS:
      _orderState = payload.state;
      _totalCartItems = payload.item_count;
      _totalCartValue = parseFloat(payload.order_total_amount.amount);
      _ship_address = payload.shipping_address;
      _bill_address = payload.billing_address;
      _orderState = payload.state;
      _shipTotal = payload.ship_total;
      _itemTotal = parseFloat(payload.order_total_amount.amount);
      _lineItems = payload.line_items;
      _lineItemIds = _lineItems.map(lineItem => lineItem.id);
      _lineItemEntities = _lineItems.reduce((lineItems: { [id: number]: LineItem }, lineItem: LineItem) => {
        return Object.assign(lineItems, {
          [lineItem.id]: lineItem
        });
      }, {});

      //Payments

      _payments = payload.payments;
      _paymentIds = _payments.map(payment => payment.payment_method_id);
      _paymentEntities = _payments.reduce((payments: { [id: number]: Payment }, payment: Payment) => {
        return Object.assign(payments, {
          [payment.payment_method_id]: payment
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
        lineItems: _lineItems,
        lineItemEntities: _lineItemEntities,
        payments: _payments,
        paymentEntities: _paymentEntities
      }) as CheckoutState;

    default:
      return state;
  }
};


