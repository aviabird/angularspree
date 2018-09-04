import { Injectable } from '@angular/core';
import { filter, switchMap, map } from 'rxjs/operators';
import { Observable} from 'rxjs';
import { Actions, Effect } from '@ngrx/effects';
import { Action } from '@ngrx/store';

import { User } from './../../core/models/user';
import { AuthService } from '../../core/services/auth.service';
import { AuthActions } from '../actions/auth.actions';
import { CheckoutService } from '../../core/services/checkout.service';

@Injectable()
export class AuthenticationEffects {

  @Effect()
  Authorized$: Observable<Action> = this.actions$
    .ofType(AuthActions.AUTHORIZE)
    .pipe(
      switchMap<Action, { status: string } & User>(() => {
        return this.authService.authorized();
      }),
      switchMap((data) => this.checkoutService.fetchCurrentOrder().pipe(map(() => data))),
      filter(data => data.status !== 'unauthorized'),
      map(() => this.authActions.loginSuccess())
    );

  @Effect()
  OAuthLogin: Observable<Action> = this.actions$
    .ofType(AuthActions.O_AUTH_LOGIN)
    .pipe(
      switchMap<Action & { payload: string }, string | User>(action => {
        return this.authService.socialLogin(action.payload);
      }),
      map(data => {
        if (typeof data === 'string') {
          return this.authActions.noOp();
        } else {
          return this.authActions.loginSuccess();
        }
      })
    );

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private authActions: AuthActions,
    private checkoutService: CheckoutService
  ) { }
}
