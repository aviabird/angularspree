import { searchReducer } from './home/reducers/search.reducers';
import { environment } from './../environments/environment';
import { productReducer } from './product/reducers/product-reducer';
import { ProductState } from './product/reducers/product-state';
import { userReducer } from './user/reducers/user.reducer';
import { checkoutReducer } from './checkout/reducers/checkout.reducer';
import { authReducer } from './auth/reducers/auth.reducer';

/**
 * combineReducers is another useful metareducer that takes a map of reducer
 * functions and creates a new reducer that stores the gathers the values
 * of each reducer and stores them using the reducer's key. Think of it
 * almost like a database, where every reducer is a table in the db.
 *
 * More: https://egghead.io/lessons/javascript-redux-implementing-combinereducers-from-scratch
 */
import { combineReducers, ActionReducer } from '@ngrx/store';

import { AppState } from './interfaces';

/**
 * The compose function is one of our most handy tools. In basic terms, you give
 * it any number of functions and it returns a function. This new function
 * takes a value and chains it through every composed function, returning
 * the output.
 *
 * More: https://drboolean.gitbooks.io/mostly-adequate-guide/content/ch5.html
 */
import { compose } from '@ngrx/core/compose';

/**
 * storeFreeze prevents state from being mutated. When mutation occurs, an
 * exception will be thrown. This is useful during development mode to
 * ensure that none of the reducers accidentally mutates the state.
 */
import { storeFreeze } from 'ngrx-store-freeze';

const reducers = {
  products: productReducer,
  auth: authReducer,
  checkout: checkoutReducer,
  users: userReducer,
  search: searchReducer
};

export const developmentReducer: ActionReducer<AppState> = compose(storeFreeze, combineReducers)(reducers); ;
const productionReducer: ActionReducer<AppState> = combineReducers(reducers);

/**
 *
 *
 * @export
 * @param {*} state
 * @param {*} action
 * @returns
 */
export function reducer(state: any, action: any) {
  if (environment.production) {
    return productionReducer(state, action);
  } else {
    return developmentReducer(state, action);
  }
}

