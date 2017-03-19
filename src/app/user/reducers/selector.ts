import { AppState } from './../../interfaces';
import { createSelector } from 'reselect';
import { UserState } from './user.state';
import { List } from 'immutable';
import { Order } from '../../core/models/order';

// Base product state function
function getUserState(state: AppState): UserState {
    return state.users;
}

// ******************** Individual selectors ***************************
const fetchUserOrders = function(state: UserState): Order[] {
    return state.orders.toJS();
};

// *************************** PUBLIC API's ****************************
export const getUserOrders = createSelector(getUserState, fetchUserOrders);
