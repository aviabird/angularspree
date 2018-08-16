import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { LayoutActionTypes } from '../actions/layout.actions';

@Injectable()
export class LayoutEffects {
  constructor(private actions$: Actions) {}
}
