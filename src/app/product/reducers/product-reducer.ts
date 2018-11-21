import { Product } from './../../core/models/product';
import { ProductActions } from './../actions/product-actions';
import { ProductState, ProductStateRecord } from './product-state';

export const initialState: ProductState = new ProductStateRecord() as unknown as ProductState;

export function reducer(state = initialState, { type, payload }: any): ProductState {
  switch (type) {

    case ProductActions.GET_PRODUCT_DETAIL_SUCCESS:
      return state.merge({
        selectedProduct: payload
      }) as ProductState;

    case ProductActions.GET_ALL_PRODUCTS_SUCCESS:
      const _products: Product[] = payload.products;
      const _showAllProducts: Product[] = payload.products;
      const productIds: number[] = _products.map(product => product.id);
      const productEntities = _products.reduce((products: { [id: number]: Product }, product: Product) => {
        return Object.assign(products, {
          [product.id]: product
        });
      }, {});

      return state.merge({
        productIds: productIds,
        productEntities: productEntities,
        showAllProducts: _showAllProducts
      }) as ProductState;

    case ProductActions.GET_ALL_TAXONOMIES_SUCCESS:
      const _taxonomies = payload.taxonomies.taxonomies;
      return state.merge({
        taxonomies: _taxonomies,
      }) as ProductState;

    case ProductActions.GET_RELATED_PRODUCT_SUCCESS:
      const relatedProducts: Product[] = payload.products

      return state.merge({
        relatedProducts: relatedProducts
      }) as ProductState;

    case ProductActions.GET_REVIEWS_SUCCESS:
      const _productReviews = payload
      return state.merge({
        productReviews: _productReviews
      }) as ProductState;

    case ProductActions.GET_ALL_BRANDS_SUCCESS:
      const _brands = payload
      return state.merge({
        brands: _brands
      }) as ProductState;

    case ProductActions.GET_RATING_OPTIONS_SUCCESS:
      const _productRatingOptions = payload.rating_options
      return state.merge({
        productRatingOptions: _productRatingOptions,
        isReviewSubmitted: false
      }) as ProductState;

    case ProductActions.WRITE_REVIEW_SUCCESS:
      return state.merge({
        isReviewSubmitted: true
      }) as ProductState;

    default:
      return state;
  }
};
