import { Action } from '@ngrx/store';

export class SearchActions {
    static GET_ALL_FILTERS = 'GET_ALL_FILTERS';
    static ADD_FILTER = 'ADD_FILTER';
    static REMOVE_FILTER = 'REMOVE_FILTER';

    getAllFiltes(): Action {
        return { type: SearchActions.GET_ALL_FILTERS };
    }

    addFilter(taxon: any): Action {
      return {
        type: SearchActions.ADD_FILTER,
        payload: taxon
      };
    }

    removeFilter(taxon: any) {
      return {
        type: SearchActions.REMOVE_FILTER,
        payload: taxon
      };
    }
}