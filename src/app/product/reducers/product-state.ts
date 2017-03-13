import { Product } from './../../core/models/product';
import { Map, Record } from 'immutable';

export interface ProductState extends Map<string, any> {
  productIds: [number];
  productEntities: { [id: number]: Product};
  selectedProductId: number;
  selectedProduct: Product;
}

export const ProductStateRecord = Record({
  productIds: [],
  productEntities: {},
  selectedProductId: null,
  selectedProduct: {}
});
