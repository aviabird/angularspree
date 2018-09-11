import { Product } from './../../core/models/product';
import { Map, Record, List } from 'immutable';
import { User } from '../../core/models/user';
import { Order } from '../../core/models/order';
import { Address } from '../../core/models/address';
import { Country } from '../../core/models/country';
import { CState } from '../../core/models/state';

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
  userAddresses: List<Address>;
  countries: List<Country>;
  states: List<CState>;
}

export const UserStateRecord = Record({
  user: Map({}),
  orders: List([]),
  favorite_products: List([]),
  userAddresses: List([]),
  countries: List([]),
  states: List([])
});
