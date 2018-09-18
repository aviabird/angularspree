import { Address } from './../../core/models/address';
import { LineItem } from './../../core/models/line_item';
import { Map, Record, List, fromJS } from 'immutable';
import { Payment } from '../../core/models/payment';

export interface CheckoutState extends Map<string, any> {
  orderNumber: string;
  orderState: string;
  lineItemIds: List<number>;
  lineItemEntities: Map<number, LineItem>;
  totalCartItems: number;
  totalCartValue: number;
  billAddress: any;
  shipAddress: any;
  shipTotal: number;
  itemTotal: number;
  adjustmentTotal: number;
  orderId: number;
  lineItems: List<LineItem>;
  payments: List<Payment>;
  paymentEntities: Map<number, Payment>;
  isPaymentAdded: boolean;
}

export const CheckoutStateRecord = Record({
  orderNumber: null,
  orderState: null,
  lineItemIds: List([]),
  lineItemEntities: Map({}),
  totalCartItems: 0,
  totalCartValue: 0,
  billAddress: fromJS({}),
  shipAddress: fromJS({}),
  shipTotal: 0,
  itemTotal: 0,
  adjustmentTotal: 0,
  orderId: null,
  lineItems: List([]),
  payments: List([]),
  paymentEntities: Map({}),
  isPaymentAdded: false
});
