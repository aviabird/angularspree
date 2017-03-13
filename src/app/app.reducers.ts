import { environment } from './../environments/environment';
import { productReducer } from './product/reducers/product-reducer';
import { ProductState } from './product/reducers/product-state';
import { combineReducers, ActionReducer } from '@ngrx/store';
import { AppState } from "./interfaces";

const reducers = {
  product: productReducer
}

export const developmentReducer: ActionReducer<AppState> = combineReducers(reducers);
const productionReducer: ActionReducer<AppState> = combineReducers(reducers);

export function reducer(state: any, action: any) {
  if (environment.production) {
    return productionReducer(state, action);
  } else {
    return developmentReducer(state, action);
  }
}

