import { Product } from './../../core/models/product';
import { Action } from '@ngrx/store';
import { Order } from '../../core/models/order';

export class UserActions {
  static GET_USER_ORDERS = 'GET_USER_ORDERS';
  static GET_USER_ORDERS_SUCCESS = 'GET_USER_ORDERS_SUCCESS';
  static GET_USER_FAVORITE_PRODUCTS = 'GET_USER_FAVORITE_PRODUCTS';
  static GET_USER_FAVORITE_PRODUCTS_SUCCESS = 'GET_USER_FAVORITE_PRODUCTS_SUCCESS';
  static REMOVE_FROM_FAVORITE_PRODUCTS = 'REMOVE_FROM_FAVORITE_PRODUCTS';

  getUserOrders(email: string, page: number) {
    return {
      type: UserActions.GET_USER_ORDERS,
      payload: { email, page }
    };
  }

  getUserOrdersSuccess(orders: Order[]) {
    return { type: UserActions.GET_USER_ORDERS_SUCCESS, payload: orders };
  }

  getUserFavoriteProducts() {
    return { type: UserActions.GET_USER_FAVORITE_PRODUCTS };
  }

  getUserFavoriteProductsSuccess(products: Product[]) {
    return { type: UserActions.GET_USER_FAVORITE_PRODUCTS_SUCCESS, payload: products };
  }

  removeFromFavoriteProducts(id: number) {
    return { type: UserActions.REMOVE_FROM_FAVORITE_PRODUCTS, payload: id };
  }

}
