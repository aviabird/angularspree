import { Injectable } from '@angular/core';
import { Actions, Effect} from '@ngrx/effects';

import { Action } from '@ngrx/store';
import { AuthService } from '../../core/services/auth.service';
import { AuthActions } from '../actions/auth.actions';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class AuthenticationEffects {
  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private authActions: AuthActions
  ) { }

  @Effect()
  Authorized$: Observable<Action> = this.actions$
    .ofType(AuthActions.AUTHORIZE)
    .switchMap(() => this.authService.authorized())
    .filter((data) => !data.error && data.count)
    .map(() => this.authActions.loginSuccess());

  @Effect()
  OAuthLogin: Observable<Action> = this.actions$
    .ofType(AuthActions.O_AUTH_LOGIN)
    .switchMap((action: any) => {
      return this.authService.socialLogin(action.payload);
    })
    .filter(data => data !== null)
    .map((data) => {
      if (typeof (data) === typeof ('string')) {
        return this.authActions.noOp();
      } else {
        return this.authActions.loginSuccess();
      }
    });
}
