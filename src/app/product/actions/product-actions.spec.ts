import { TestBed } from '@angular/core/testing';

import { Product } from './../../core/models/product';
import { ProductActions } from './product-actions';

fdescribe('products', () => {
  fdescribe('product actions', () => {
    let actions: ProductActions;
    let product: Product;

    beforeEach(() => {
      actions = new ProductActions();
      product = new Product();
    });

    fdescribe('get all product action', () => {
      fit('should trigger get all product action', () => {
        expect(actions.getAllProducts()).toEqual({
          type: ProductActions.GET_ALL_PRODUCTS
        });
      });
    });

    fdescribe('get all product success action', () => {
      fit('should trigger get all product success action', () => {
        const products = [];
        // Products should be an array, would fail if product type was not any
        expect(actions.getAllProductsSuccess(products)).toEqual({
          type: ProductActions.GET_ALL_PRODUCTS_SUCCESS,
          payload: products
        });
      });
    });

    fdescribe('get product detail action', () => {
      fit('should trigger get product details action', () => {
        const id = 'some id';
        expect(actions.getProductDetail(id)).toEqual({
          type: ProductActions.GET_PRODUCT_DETAIL,
          payload: id
        });
      });
    });

    fdescribe('get product detail success action', () => {
      fit('should trigger get product details success action', () => {
        expect(actions.getProductDetailSuccess(product as any)).toEqual({
          type: ProductActions.GET_PRODUCT_DETAIL_SUCCESS,
          payload: product
        });
      });
    });

    fdescribe('clear selected product action', () => {
      fit('should trigger clear selected product action', () => {
        expect(actions.clearSelectedProduct()).toEqual({
          type: ProductActions.CLEAR_SELECTED_PRODUCT
        });
      });
    });

    fdescribe('get all taxonomies action', () => {
      fit('should trigger get all taxonomies action', () => {
        expect(actions.getAllTaxonomies()).toEqual({
          type: ProductActions.GET_ALL_TAXONOMIES
        });
      });
    });

    fdescribe('get all taxonomies success action', () => {
      fit('should trigger get all taxonomies success action', () => {
        const taxonomies = [];
        expect(actions.getAllTaxonomiesSuccess(taxonomies)).toEqual({
          type: ProductActions.GET_ALL_TAXONOMIES_SUCCESS,
          payload: taxonomies
        });
      });
    });
  });
});
