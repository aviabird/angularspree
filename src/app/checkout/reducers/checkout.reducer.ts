import { LineItem } from './../../core/models/line_item';
import { CheckoutActions } from './../actions/checkout.actions';
import { CheckoutState, CheckoutStateRecord } from './checkout.state';
import { Payment } from '../../core/models/payment';

export const initialState: CheckoutState = new CheckoutStateRecord() as unknown as CheckoutState;

export function reducer(state = initialState, { type, payload }: any): CheckoutState {

  let _lineItems, _lineItemEntities, _lineItemIds, _totalCartItems = 0, _totalCartValue,
    _ship_address, _bill_address, _orderState, _shipTotal = 0, _itemTotal, _adjustmentTotal,
    _paymentEntities, _payments, _orderNumber, _orderId, _paymentIds;

  switch (type) {

    case CheckoutActions.FETCH_CURRENT_ORDER_SUCCESS:
      _orderNumber = payload.number;
      _orderId = payload.id;
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
        lineItems: _lineItems,
        lineItemIds: _lineItemIds,
        lineItemEntities: _lineItemEntities,
        totalCartItems: _totalCartItems,
        totalCartValue: _totalCartValue,
        shipAddress: _ship_address,
        billAddress: _bill_address,
        shipTotal: _shipTotal,
        itemTotal: _itemTotal,
        adjustmentTotal: _adjustmentTotal,
        isPaymentAdded: false
      }) as CheckoutState;

    case CheckoutActions.ADD_TO_CART_SUCCESS:
      return state.merge({
      }) as CheckoutState;

    case CheckoutActions.ORDER_COMPLETE_SUCCESS:
      return initialState;

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
        return Object.assign(lineItems, { [lineItem.id]: lineItem })
      }, {});

      _payments = payload.payments;
      _paymentIds = _payments.map(payment => payment.payment_method_id);
      _paymentEntities = _payments.reduce((payments: { [id: number]: Payment }, payment: Payment) => {
        return Object.assign(payments, { [payment.payment_method_id]: payment })
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
        paymentEntities: _paymentEntities,
        isPaymentAdded: true
      }) as CheckoutState;

    default:
      return state;
  }
};


