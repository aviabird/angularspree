import { Taxonomy } from './../../core/models/taxonomy';
import { Product } from './../../core/models/product';
import { ProductActions } from './../actions/product-actions';
import { ProductState, ProductStateRecord } from './product-state';
import { Action, ActionReducer } from '@ngrx/store';

export const initialState: ProductState = new ProductStateRecord() as ProductState;

export const productReducer: ActionReducer<ProductState> =
  (state: ProductState = initialState, { type, payload }: Action): ProductState => {
  switch (type) {

    case ProductActions.GET_PRODUCT_DETAIL_SUCCESS:
      return state.merge({
        selectedProduct: payload
      }) as ProductState;

    case ProductActions.GET_ALL_PRODUCTS_SUCCESS:
      const _products: Product[] = payload.products.products;
      const productIds: number[] = _products.map(product => product.id);
      const productEntities = _products.reduce((products: { [id: number]: Product }, product: Product) => {
        return Object.assign(products, {
          [product.id]: product
        });
      }, { });
      return state.merge({
        productIds: productIds,
        productEntities: productEntities
      }) as ProductState;

   case ProductActions.GET_ALL_TAXONOMIES_SUCCESS:
    const _taxonomies: Taxonomy[] = payload.taxonomies.taxonomies;
    return state.merge({
      taxonomies: _taxonomies
    }) as ProductState;

    default:
      return state;
  }
};
