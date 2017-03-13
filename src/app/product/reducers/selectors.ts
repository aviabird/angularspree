import { Product } from './../../core/models/product';
import { AppState } from './../../interfaces';
import { ProductState } from './product-state';
import { createSelector } from 'reselect';

// Base product state function
function getProductState(state: AppState) : ProductState {
    return state.productState;
}

//******************** Individual selectors ***************************
const fetchProducts = function(state: ProductState): Product[] {
    let ids = state.productIds;
    let productEntities = state.productEntities;
    return ids.map(id => productEntities[id]);
}

const fetchSelectedProduct = function(state: ProductState): Product {
    return state.selectedProduct;
}

//*************************** PUBLIC API's ****************************
export const getSelectedProduct = createSelector(getProductState, fetchSelectedProduct);
export const getProducts = createSelector(getProductState, fetchProducts)