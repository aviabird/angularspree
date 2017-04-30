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
}

export const UserStateRecord = Record({
  user: Map({}),
  orders: List([])
});
