import { Product } from './../../core/models/product';
import { Map, Record } from 'immutable';

export interface ProductState extends Map<string, any> {
  productIds: [string];
  productEntities: {[id: string]: Product};
  selectedProductId: string;
  selectedProduct: Product;
}

export const ProductStateRecord = Record({
  productIds: [],
  productEntities: {},
  selectedProductId: null,
  selectedProduct: {}
});
