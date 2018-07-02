import { Taxonomy } from './../../core/models/taxonomy';
/**
 * Read more about Immutable Records here
 * 1. https://coderwall.com/p/vxk_tg/using-immutable-js-in-typescript
 * 2. http://untangled.io/immutable-js-the-foolproof-guide-to-creating-lists/
 * 3. https://blog.jscrambler.com/immutable-data-immutable-js/
 * 4. https://medium.com/azendoo-team/immutable-record-react-redux-99f389ed676#.91s1g124s
 */

import { Product } from './../../core/models/product';
import { Map, Record, List } from 'immutable';

export interface ProductState extends Map<string, any> {
  productIds: List<number>;
  productEntities: Map<number, Product>;
  selectedProductId: number;
  selectedProduct: Product;
  taxonomies: List<Taxonomy>;
  showAllProducts: List<Product>;
  relatedProducts: List<Product>;
  productReviews: List<any>;
  rootTaxonomyId: number;
}

export const ProductStateRecord = Record({
  productIds: List([]),
  productEntities: Map({}),
  selectedProductId: null,
  selectedProduct: Map({}),
  taxonomies: List([]),
  showAllProducts: List([]),
  relatedProducts: List([]),
  productReviews: List([]),
  rootTaxonomyId: 0
});
