import { Order } from '../../core/models/order';
import { Address } from '../../core/models/address';
import { CState } from '../../core/models/state';
import { Country } from '../../core/models/country';
import { state } from '@angular/animations';

export class UserActions {
  static GET_USER_ORDERS = 'GET_USER_ORDERS';
  static GET_USER_ORDERS_SUCCESS = 'GET_USER_ORDERS_SUCCESS';
  static GET_USER_FAVORITE_PRODUCTS = 'GET_USER_FAVORITE_PRODUCTS';
  static GET_USER_FAVORITE_PRODUCTS_SUCCESS = 'GET_USER_FAVORITE_PRODUCTS_SUCCESS';
  static REMOVE_FROM_FAVORITE_PRODUCTS = 'REMOVE_FROM_FAVORITE_PRODUCTS';
  static FETCH_USER_ADDRESS = 'FETCH_USER_ADDRESS';
  static FETCH_USER_ADDRESS_SUCCEESS = 'FETCH_USER_ADDRESS_SUCCEESS';
  static FETCH_COUNTRIES = 'FETCH_COUNTRIES';
  static FETCH_COUNTRIES_SUCCEESS = 'FETCH_COUNTRIES_SUCCEESS';
  static FETCH_STATES = 'FETCH_STATES';
  static FETCH_STATES_SUCCEESS = 'FETCH_STATES_SUCCEESS';
  static DELETE_ADDRESS = 'DELETE_ADDRESS';

  getUserOrders() {
    return { type: UserActions.GET_USER_ORDERS }
  }

  getUserOrdersSuccess(orders: Order[]) {
    return { type: UserActions.GET_USER_ORDERS_SUCCESS, payload: orders };
  }

  fetchUserAddress() {
    return {
      type: UserActions.FETCH_USER_ADDRESS
    }
  }

  fetchUserAddressSuccess(addressList: Address[]) {
    return {
      type: UserActions.FETCH_USER_ADDRESS_SUCCEESS,
      payload: addressList
    }
  }

  fetchCountries() {
    return {
      type: UserActions.FETCH_COUNTRIES
    }
  }

  fetchCountriesSuccess(countries: Country[]) {
    return {
      type: UserActions.FETCH_COUNTRIES_SUCCEESS,
      payload: countries
    }
  }

  fetchStates(countryId: string) {
    return {
      type: UserActions.FETCH_STATES,
      payload: countryId
    }
  }

  fetchStatesSuccess(states: CState[]) {
    return {
      type: UserActions.FETCH_STATES_SUCCEESS,
      payload: states
    }
  }

  deleteUserAddress(addressId: string) {
    return {
      type: UserActions.DELETE_ADDRESS,
      payload: addressId
    }
  }
}
