import { environment } from './../environments/environment';
import * as fromProduct from './product/reducers/product-reducer';
import * as fromUser from './user/reducers/user.reducer';
import * as fromCheckout from './checkout/reducers/checkout.reducer';
import * as fromAuth from './auth/reducers/auth.reducer';
import {Action} from '@ngrx/store';

/**
 * combineReducers is another useful metareducer that takes a map of reducer
 * functions and creates a new reducer that stores the gathers the values
 * of each reducer and stores them using the reducer's key. Think of it
 * almost like a database, where every reducer is a table in the db.
 *
 * More: https://egghead.io/lessons/javascript-redux-implementing-combinereducers-from-scratch
 */
import { ActionReducer, ActionReducerMap, MetaReducer } from '@ngrx/store';

import { AppState as State } from './interfaces';

/**
 * The compose function is one of our most handy tools. In basic terms, you give
 * it any number of functions and it returns a function. This new function
 * takes a value and chains it through every composed function, returning
 * the output.
 *
 * More: https://drboolean.gitbooks.io/mostly-adequate-guide/content/ch5.html
 */
// import { compose } from '@ngrx/core/compose';

/**
 * storeFreeze prevents state from being mutated. When mutation occurs, an
 * exception will be thrown. This is useful during development mode to
 * ensure that none of the reducers accidentally mutates the state.
 */
import { storeFreeze } from 'ngrx-store-freeze';

export const reducers: ActionReducerMap<State> = {
  products: fromProduct.reducer,
  auth: fromAuth.reducer,
  checkout: fromCheckout.reducer,
  users: fromUser.reducer
};

// console.log all actions
export function logger(reducer: ActionReducer<State>): ActionReducer<State, Action> {
  return function (state: State, action: Action): State {
    // console.log('state', state);
    // console.log('action', action);

    return reducer(state, action);
  };
}

/**
 * By default, @ngrx/store uses combineReducers with the reducer map to compose
 * the root meta-reducer. To add more meta-reducers, provide an array of meta-reducers
 * that will be composed to form the root meta-reducer.
 */
export const metaReducers: MetaReducer<State>[] = !environment.production
  ? [logger, storeFreeze]
  : [];
