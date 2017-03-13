import { Record } from 'immutable';
import { LineItem } from './../../../core/models/line_item';

export interface CartState extends Map<string, any> {
  lineItemIds: number[];
  lineItemEntities: { [id: number]: LineItem };
  totalCartValue: number;
}

export const CartStateRecord = Record({
  lineItemIds: [],
  lineItemEntities: {},
  totalCartValue: null
});
