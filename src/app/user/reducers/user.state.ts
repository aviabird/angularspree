import { Product } from './../../core/models/product';
import { Map, Record, List } from 'immutable';
import { User } from '../../core/models/user';
import { Order } from '../../core/models/order';

/**
 *
 *
 * @export
 * @interface UserState
 * @extends {Map<string, any>}
 */
export interface UserState extends Map<string, any> {
  user: User;
  orders: List<Order[]>;
  favorite_products: List<Product>;
}

export const UserStateRecord = Record({
  user: Map({}),
  orders: List([]),
  favorite_products: List([])
});
