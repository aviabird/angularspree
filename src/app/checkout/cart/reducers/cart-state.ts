import { Map, Record, List } from 'immutable';
import { LineItem } from './../../../core/models/line_item';

export interface CartState extends Map<string, any> {
  orderNumber: number;
  lineItemIds: List<number>;
  lineItemEntities: Map<number, LineItem>;
  totalCartValue: number;
}

export const CartStateRecord = Record({
  orderNumber: null,
  lineItemIds: List([]),
  lineItemEntities: Map({}),
  totalCartValue: null
});
