import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { SearchActionTypes } from '../actions/search.actions';

@Injectable()
export class SearchEffects {

  @Effect()
  loadFoos$ = this.actions$.pipe(ofType(SearchActionTypes.LoadSearchResults));

  constructor(private actions$: Actions) {}
}
