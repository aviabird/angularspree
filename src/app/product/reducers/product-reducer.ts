import { Product } from './../../core/models/product';
import { ProductActions } from './../actions/product-actions';
import { ProductState, ProductStateRecord } from './product-state';
import { Action, ActionReducer } from '@ngrx/store';

export const initialState: ProductState = new ProductStateRecord() as ProductState;

export const productReducer: ActionReducer<ProductState> =
(state: ProductState = initialState, { type, payload }: Action): ProductState => {
  switch (type) {

    case ProductActions.GET_PRODUCT_DETAIL_SUCCESS:
      Object.assign({}, state, {
        selectedProduct: payload
      });

      return state;

    // case ActionTypes.CLEAR_SELECTED_PRODUCT: {
    //   return Object.assign({}, state, {
    //     selectedProduct: null
    //   })

    //   return state;
    // }

    case ProductActions.GET_ALL_PRODUCTS:
      const products: Product[] = payload;
      const productIds: number[] = products.map(product => product.id);
      const productEntities = payload.reduce((_products: { [id: string]: Product }, product: Product) => {
        Object.assign(_products, {
          [product.id]: product
        });
      }, {});
      state.merge({
        productIds: productIds,
        productEntities: productEntities
      });
      return state;

    // case "":
    //     return state;
    default:
      return state;
  }
};
