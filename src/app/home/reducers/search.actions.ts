import { Action } from '@ngrx/store';

export class SearchActions {
    static GET_ALL_FILTERS = 'GET_ALL_FILTERS';
    static ADD_FILTER = 'ADD_FILTER';
    static REMOVE_FILTER = 'REMOVE_FILTER';

    /**
     * @method getAllFtilers
     * Fetches all the filters that have been getSelectedProduct
     * Used in filterSummaryComponent
     */
    getAllFiltes(): Action {
        return { type: SearchActions.GET_ALL_FILTERS };
    }

    /**
     * @method addFilter 
     * @param taxon Class Taxon
     * Get's triggered on checking the checkboxes in TaxonsComponent.
     */
    addFilter(taxon: any): Action {
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
}