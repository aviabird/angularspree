import { Taxonomy } from './../../core/models/taxonomy';
import { Product } from './../../core/models/product';
import { Action } from '@ngrx/store';

export class ProductActions {
    static GET_ALL_PRODUCTS = 'GET_ALL_PRODUCTS';
    static GET_ALL_PRODUCTS_SUCCESS = 'GET_ALL_PRODUCTS_SUCCESS';
    static GET_PRODUCT_DETAIL = 'GET_PRODUCT_DETAIL';
    static GET_PRODUCT_DETAIL_SUCCESS = 'GET_PRODUCT_DETAIL_SUCCESS';
    static CLEAR_SELECTED_PRODUCT = 'CLEAR_SELECTED_PRODUCT';
    static GET_ALL_TAXONOMIES = 'GET_ALL_TAXONOMIES';
    static GET_ALL_TAXONOMIES_SUCCESS = 'GET_ALL_TAXONOMIES_SUCCESS';

    getAllProducts(): Action {
        return { type: ProductActions.GET_ALL_PRODUCTS };
    }

    getProductDetail(id: string): Action {
        return {
            type: ProductActions.GET_PRODUCT_DETAIL,
            payload: id
        };
    }

    // change products type to Product[]
    getAllProductsSuccess(products: any): Action {
        return {
            type: ProductActions.GET_ALL_PRODUCTS_SUCCESS,
            payload: products
         };
    }

    getProductDetailSuccess(product: Product): Action {
        return {
            type: ProductActions.GET_PRODUCT_DETAIL_SUCCESS,
            payload: product
        };
    }

    clearSelectedProduct(): Action {
        return { type: ProductActions.CLEAR_SELECTED_PRODUCT };
    }

    getAllTaxonomies(): Action {
        return { type: ProductActions.GET_ALL_TAXONOMIES };
    }

    getAllTaxonomiesSuccess(taxonomies: any): Action {
        return {
            type: ProductActions.GET_ALL_TAXONOMIES_SUCCESS,
            payload: taxonomies
        };
    }
}
