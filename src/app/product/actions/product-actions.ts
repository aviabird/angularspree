import { Product } from './../../core/models/product';
import { Action } from '@ngrx/store';

export class ProductActions {
    static GET_ALL_PRODUCTS = "GET_ALL_PRODUCTS";
    static GET_ALL_PRODUCTS_SUCCESS = "GET_ALL_PRODUCTS_SUCCESS";
    static GET_PRODUCT_DETAIL = "GET_PRODUCT_DETAIL";
    static GET_PRODUCT_DETAIL_SUCCESS = "GET_PRODUCT_DETAIL_SUCCESS";

    getAllProducts(): Action {
        return { type: ProductActions.GET_ALL_PRODUCTS };
    }

    getProductDetail(id: string): Action {
        return { 
            type: ProductActions.GET_PRODUCT_DETAIL,
            payload: id
        };
    }

    getAllProductsSuccess(products: Product[]): Action {
        return { 
            type: ProductActions.GET_ALL_PRODUCTS_SUCCESS,
            payload: products
         };
    }

    getProductDetailSuccess(product: Product) {
        return {
            type: ProductActions.GET_PRODUCT_DETAIL_SUCCESS,
            payload: product
        }
    }

}