import { AppState } from './../../interfaces';
import { ProductState } from './product-state';
import { createSelector } from 'reselect';
import { Map, List, fromJS } from 'immutable';

// Base product state selector function
export function getProductState(state: AppState): ProductState {
  return state.products;
}

// ******************** Individual selectors ***************************
export function fetchProducts(state: ProductState) {
  const ids = state.productIds.toJS();
  const productEntities = state.productEntities.toJS();
  return ids.map(id => productEntities[id]);
}

export function fetchAllTaxonomies(state: ProductState) {
  return state.taxonomies.toJS();
}

const fetchSelectedProduct = function (state: ProductState) {
  return state.selectedProduct;
};

const fetchAllProductSearch = function (state: ProductState) {
  return state.showAllProducts.toJS();
};

const fetchReletedProducts = function (state: ProductState) {
  return state.relatedProducts.toJS();
};
const fetchProductReviews = function (state: ProductState) {
  return state.productReviews.toJS();
};

const fetchRootTaxonId = function (state: ProductState) {
  return state.rootTaxonomyId;
};

// *************************** PUBLIC API's ****************************
export const getSelectedProduct = createSelector(getProductState, fetchSelectedProduct);
export const getProducts = createSelector(getProductState, fetchProducts);
export const getTaxonomies = createSelector(getProductState, fetchAllTaxonomies);
export const showAllProducts = createSelector(getProductState, fetchAllProductSearch);
export const relatedProducts = createSelector(getProductState, fetchReletedProducts);
export const productReviews = createSelector(getProductState, fetchProductReviews);
export const rootTaxonomyId = createSelector(getProductState, fetchRootTaxonId);

