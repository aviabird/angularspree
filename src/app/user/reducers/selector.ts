import { Product } from './../../core/models/product';
import { AppState } from './../../interfaces';
import { createSelector } from 'reselect';
import { UserState } from './user.state';
import { Order } from '../../core/models/order';
import { Address } from '../../core/models/address';
import { Country } from '../../core/models/country';
import { CState } from '../../core/models/state';

// Base product state function
const getUserState = (state: AppState): UserState => state.users;

// ******************** Individual selectors ***************************
const fetchUserOrders = (state: UserState): Order[] => state.orders as unknown as Order[];
const fetchUserFavoriteProducts = (state: UserState): Product[] => state.favorite_products as unknown as Product[];
const fetchUserAddresses = (state: UserState): Address[] => state.userAddresses as unknown as Address[];
const fetchCountries = (state: UserState): Country[] => state.countries as unknown as Country[];
const fetchStates = (state: UserState): CState[] => state.states as unknown as CState[];

// *************************** PUBLIC API's ****************************
export const getUserOrders = createSelector(getUserState, fetchUserOrders);
export const getUserFavoriteProducts = createSelector(getUserState, fetchUserFavoriteProducts);
export const getUserAddressess = createSelector(getUserState, fetchUserAddresses);
export const getCountries = createSelector(getUserState, fetchCountries);
export const getStates = createSelector(getUserState, fetchStates);

