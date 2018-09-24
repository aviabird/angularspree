import { Product } from './../../core/models/product';
import { Action } from '@ngrx/store';

export class SearchActions {
  static GET_ALL_FILTERS = 'GET_ALL_FILTERS';
  static ADD_FILTER = 'ADD_FILTER';
  static REMOVE_FILTER = 'REMOVE_FILTER';
  static GET_PRODUCTS_BY_KEYWORD = 'GET_PRODUCTS_BY_KEYWORD';
  static GET_PRODUCTS_BY_KEYWORD_SUCCESS = 'GET_PRODUCTS_BY_KEYWORD_SUCCESS';
  static GET_PRODUCTS_BY_TAXON = 'GET_PRODUCTS_BY_TAXON'
  static GET_CHILD_TAXONS = 'GET_CHILD_TAXONS'
  static GET_CHILD_TAXONS_SUCCESS = 'GET_CHILD_TAXONS_SUCCESS'
  static CLEAR_SELECTED_CATAGEORY = 'CLEAR_SELECTED_CATAGEORY'
  static GET_TAXONOMIES_BY_NAME = 'GET_TAXONOMIES_BY_NAME'
  static GET_TAXONOMIES_BY_NAME_SUCCESS = 'GET_TAXONOMIES_BY_NAME_SUCCESS'
  static SET_SEARCH_FILTER_ON = 'SET_SEARCH_FILTER_ON'
  static SET_SEARCH_FILTER_OFF = 'SET_SEARCH_FILTER_OFF'


  category: any;
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

  getproductsByKeyword(keyword: any) {
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

  getProductsByTaxon(taxonId: any) {
    return {
      type: SearchActions.GET_PRODUCTS_BY_TAXON,
      payload: taxonId
    }
  }

  getChildTaxons(taxonomiesId: any, taxonId: any) {
    return {
      type: SearchActions.GET_CHILD_TAXONS,
      payload: { taxonomiesId, taxonId }
    }
  }

  getChildTaxonsSuccess(taxonList: any) {
    return {
      type: SearchActions.GET_CHILD_TAXONS_SUCCESS,
      payload: taxonList
    }
  }

  clearCategeoryLevel() {
    return {
      type: SearchActions.CLEAR_SELECTED_CATAGEORY
    }
  }

  getTaxonomiesByName(taxonomyName: string, categoryName: string) {
    this.category = categoryName
    return {
      type: SearchActions.GET_TAXONOMIES_BY_NAME,
      payload: taxonomyName
    }
  }

  getTaxonomiesByNameSuccess(taxonomiList: any) {
    const category = this.category
    return {
      type: SearchActions.GET_TAXONOMIES_BY_NAME_SUCCESS,
      payload: { taxonomiList, category }
    }
  }

  setSearchFilterOn() {
    return {
      type: SearchActions.SET_SEARCH_FILTER_ON
    }
  }

  setSearchFilterOff() {
    return {
      type: SearchActions.SET_SEARCH_FILTER_OFF
    }
  }
}
