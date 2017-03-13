import { Product } from './../../core/models/product';
import { AppState } from './../../interfaces';
import { ProductState } from './product-state';
import { createSelector } from 'reselect';

// Base product state function
export function getProductState(state: AppState): ProductState {
    console.log('store app state', state);
    return state.products;
}

// ******************** Individual selectors ***************************
export function fetchProducts(state: ProductState) {
    //  if (state) {
        console.log('state -->>>>', state);
        const ids = state.productIds as number[];
        const productEntities = state.productEntities;
        const ret = ids.map(id => productEntities[id]);
        return ret;
    //  } else {
    //      console.log('state not defined');
    //      return [];
    //  }
}

const fetchSelectedProduct = function(state: ProductState): Product {
    return state.selectedProduct;
}

// *************************** PUBLIC API's ****************************
export const getSelectedProduct = createSelector(getProductState, fetchSelectedProduct);
export const getProducts = createSelector(getProductState, fetchProducts);
