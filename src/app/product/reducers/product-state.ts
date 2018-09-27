import { Taxonomy } from './../../core/models/taxonomy';
import { Product } from './../../core/models/product';
import { Map, Record, List } from 'immutable';
import { Brand } from '../../core/models/brand';
import { RatingOption } from '../../core/models/rating_option';

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
  brands: List<Brand>;
  productRatingOptions: List<RatingOption>;
  isReviewSubmitted: boolean;
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
  rootTaxonomyId: 0,
  brands: List([]),
  productRatingOptions: List([]),
  isReviewSubmitted: false
});
