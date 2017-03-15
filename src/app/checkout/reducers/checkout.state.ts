import { LineItem } from './../../core/models/line_item';
import { Map, Record, List } from 'immutable';

export interface CheckoutState extends Map<string, any> {
  orderNumber: number;
  lineItemIds: List<number>;
  lineItemEntities: Map<number, LineItem>;
  totalCartItems: number;
  totalCartValue: number;
}

export const CheckoutStateRecord = Record({
  orderNumber: null,
  lineItemIds: List([]),
  lineItemEntities: Map({}),
  totalCartItems: 0,
  totalCartValue: 0
});
