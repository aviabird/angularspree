import { ApplySearchParams, LoadedSearchResults } from './../store/actions/search.actions';
import { Store } from '@ngrx/store';
import { SearchAppliedParams } from './../models/search-param';
import { SearchingService } from './../services/searching.service';
import { ToastrService } from 'ngx-toastr';
import { catchError, tap } from 'rxjs/operators';
import { Observable ,  of } from 'rxjs';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AppState } from '../../../interfaces';

@Injectable()
export class SearchResolver implements Resolve<any> {
  appliedFilters: SearchAppliedParams = SearchingService.DEFAULT_APPLIED_FILTERS;

  constructor(
    private searchingService: SearchingService,
    private toastrService: ToastrService,
    private router: Router,
    private store: Store<AppState>
  ) { }

  resolve(route: ActivatedRouteSnapshot, _state: RouterStateSnapshot): Observable<any> {
    const appliedParams = this.searchingService.convertToAppliedParams(route.queryParams);
    const queryParams = this.searchingService.convertToAPISearchParams(appliedParams);
    // this.store.dispatch(new ApplySearchParams(appliedParams));
    return this.searchingService.search(queryParams).pipe(
      tap(resp => this.store.dispatch(new LoadedSearchResults(resp))),
      catchError(_ => {
        this.toastrService.error('', 'Bad search query');
        this.router.navigate(['']);
        return of({});
      })
    );
  }
}
