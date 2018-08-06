import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { LayoutActionTypes } from '../actions/layout.actions';

@Injectable()
export class LayoutEffects {

  @Effect()
  loadLayoutState$ = this.actions$.pipe(ofType(LayoutActionTypes.LoadLayouts));

  constructor(private actions$: Actions) {}
}
