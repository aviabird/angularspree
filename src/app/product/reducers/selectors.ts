import { Brand } from './../../core/models/brand';
import { AppState } from './../../interfaces';
import { ProductState } from './product-state';
import { createSelector } from 'reselect';
import { Product } from '../../core/models/product';
import { Taxonomy } from '../../core/models/taxonomy';
import { Review } from '../../core/models/review';
import { RatingOption } from '../../core/models/rating_option';

// Base product state selector function
const getProductState = (state: AppState): ProductState => state.products;

// ******************** Individual selectors ***************************
export function fetchProducts(state: ProductState): Product[] {
  const ids = state.productIds;
  const productEntities = state.productEntities;
  return ids.map(id => productEntities[id]) as unknown as Product[];
}
const fetchAllTaxonomies = (state: ProductState) => state.taxonomies as unknown as Taxonomy[];
const fetchSelectedProduct = (state: ProductState) => state.selectedProduct;
const fetchAllProductSearch = (state: ProductState) => state.showAllProducts as unknown as Product[];
const fetchReletedProducts = (state: ProductState) => state.relatedProducts as unknown as Product[];
const fetchProductReviews = (state: ProductState) => state.productReviews as unknown as Review[];
const fetchRootTaxonId = (state: ProductState) => state.rootTaxonomyId;
const fetchBrands = (state: ProductState) => state.brands as unknown as Brand[];
const fetchProductRatingOptions = (state: ProductState) => state.productRatingOptions as unknown as RatingOption[];
const fetchIsReviewSubmitted = (state: ProductState) => state.isReviewSubmitted;

// *************************** PUBLIC API's ****************************
export const getSelectedProduct = createSelector(getProductState, fetchSelectedProduct);
export const getProducts = createSelector(getProductState, fetchProducts);
export const getTaxonomies = createSelector(getProductState, fetchAllTaxonomies);
export const showAllProducts = createSelector(getProductState, fetchAllProductSearch);
export const relatedProducts = createSelector(getProductState, fetchReletedProducts);
export const productReviews = createSelector(getProductState, fetchProductReviews);
export const rootTaxonomyId = createSelector(getProductState, fetchRootTaxonId);
export const getBrands = createSelector(getProductState, fetchBrands);
export const getProductRatingOptions = createSelector(getProductState, fetchProductRatingOptions);
export const getIsReviewSubmitted = createSelector(getProductState, fetchIsReviewSubmitted);

