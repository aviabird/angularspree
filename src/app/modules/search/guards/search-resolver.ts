import { ApplySearchParams } from './../store/actions/search.actions';
import { Store } from '@ngrx/store';
import { SearchAppliedParams } from './../models/search-param';
import { SearchingService } from './../services/searching.service';
import { map, filter, take } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from '@angular/router';
import { AppState } from '../../../interfaces';
import * as fromSearch from './../store/selectors/search.selector';

@Injectable()
export class SearchResolver implements Resolve<any> {
  appliedFilters: SearchAppliedParams =
    SearchingService.DEFAULT_APPLIED_FILTERS;

  constructor(
    private searchingService: SearchingService,
    private store: Store<AppState>
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    _state: RouterStateSnapshot
  ): Observable<any> {
    const appliedParams = this.searchingService.convertToAppliedParams(
      route.queryParams
    );
    this.store.dispatch(new ApplySearchParams(appliedParams));
    return this.store.pipe(
      filter(state => !state.search.isLoading),
      map(fromSearch.searchResponse),
      take(1)
    );
  }
}
