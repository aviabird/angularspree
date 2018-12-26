import { SearchParam } from './../models/search-param';
import { SearchingService } from './../services/searching.service';
import { ToastrService } from 'ngx-toastr';
import { catchError, tap } from 'rxjs/operators';
import { Observable ,  of } from 'rxjs';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable()
export class SearchResolver implements Resolve<any> {
  appliedFilters: SearchParam = {...SearchingService.DEFAULT_FILTER};

  constructor(
    private searchingService: SearchingService,
    private toastrService: ToastrService,
    private router: Router
  ) { }

  resolve(route: ActivatedRouteSnapshot, _state: RouterStateSnapshot): Observable<any> {
    const query = route.queryParams['q'];
    const searchParams = {
      ...this.appliedFilters,
      q: query
    };
    return this.searchingService.search(searchParams).pipe(
      catchError(_ => {
        this.toastrService.error('', 'Bad search query');
        this.router.navigate(['']);
        return of({});
      })
    );
  }
}
