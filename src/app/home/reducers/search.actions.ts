import { Product } from './../../core/models/product';
import { Action } from '@ngrx/store';

export class SearchActions {
  static GET_ALL_FILTERS = 'GET_ALL_FILTERS';
  static ADD_FILTER = 'ADD_FILTER';
  static REMOVE_FILTER = 'REMOVE_FILTER';
  static GET_PRODUCTS_BY_KEYWORD = 'GET_PRODUCTS_BY_KEYWORD';
  static GET_PRODUCTS_BY_KEYWORD_SUCCESS = 'GET_PRODUCTS_BY_KEYWORD_SUCCESS';
  static GET_PRODUCTS_BY_TAXON = 'GET_PRODUCTS_BY_TAXON'

  /**
   * @method getAllFtilers
   * Fetches all the filters that have been getSelectedProduct
   * Used in filterSummaryComponent
   */
  getAllFiltes() {
    return { type: SearchActions.GET_ALL_FILTERS };
  }

  /**
   * @method addFilter 
   * @param taxon Class Taxon
   * Get's triggered on checking the checkboxes in TaxonsComponent.
   */
  addFilter(taxon: any) {
    return {
      type: SearchActions.ADD_FILTER,
      payload: taxon
    };
  }

  /**
   * @method removeFilter
   * @param taxon 
   * Get's triggered at 2 places:-
   * 1. When user unchecks the checkbox.
   * 2. When user clears the selected filtes in filterSummaryComponent
   */
  removeFilter(taxon: any) {
    return {
      type: SearchActions.REMOVE_FILTER,
      payload: taxon
    };
  }

  getproductsByKeyword(keyword: string) {
    return {
      type: SearchActions.GET_PRODUCTS_BY_KEYWORD,
      payload: keyword
    }
  }

  getProducsByKeywordSuccess(products: any) {
    return {
      type: SearchActions.GET_PRODUCTS_BY_KEYWORD_SUCCESS,
      payload: products
    }
  }

  getProducsByTaxon(taxonId: any) {
    return {
      type: SearchActions.GET_PRODUCTS_BY_TAXON,
      payload: taxonId
    }
  }
}
