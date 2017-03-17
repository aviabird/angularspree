import { Address } from './../../core/models/address';
import { LineItem } from './../../core/models/line_item';
import { Map, Record, List, fromJS } from 'immutable';

export interface CheckoutState extends Map<string, any> {
  orderNumber: number;
  orderState: string;
  lineItemIds: List<number>;
  lineItemEntities: Map<number, LineItem>;
  totalCartItems: number;
  totalCartValue: number;
  billAddress: any;
  shipAddress: any;
}

export const CheckoutStateRecord = Record({
  orderNumber: null,
  orderState: null,
  lineItemIds: List([]),
  lineItemEntities: Map({}),
  totalCartItems: 0,
  totalCartValue: 0,
  billAddress: fromJS({}),
  shipAddress: fromJS({})
});
