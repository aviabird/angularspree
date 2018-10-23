import { User } from './../../core/models/user';
import { filter, switchMap, map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { AuthService } from '../../core/services/auth.service';
import { AuthActions } from '../actions/auth.actions';
import { Observable } from 'rxjs';
import { CheckoutActions } from '../../checkout/actions/checkout.actions';
import { RatingCategory } from '../../core/models/rating_category';

@Injectable()
export class AuthenticationEffects {

  @Effect()
  Authorized$: Observable<Action> = this.actions$
    .ofType(AuthActions.AUTHORIZE)
    .pipe(
      switchMap(() => this.authService.authorized()),
      filter(data => data.error !== 'unauthenticated'),
      map(() => this.authActions.loginSuccess())
    );

  @Effect()
  OAuthLogin: Observable<Action> = this.actions$
    .ofType(AuthActions.O_AUTH_LOGIN)
    .pipe(
      switchMap<Action & { payload: string }, string | User>(action => {
        return this.authService.socialLogin(action.payload);
      }),
      filter(data => data !== null),
      map(data => {
        if (typeof data === typeof 'string') {
          return this.authActions.noOp();
        } else {
          return this.authActions.loginSuccess();
        }
      })
    );

  @Effect()
  AfterLogoutSuccess$: Observable<Action> = this.actions$
    .ofType(AuthActions.LOGOUT_SUCCESS)
    .pipe(
      map(_ => this.checkoutActions.orderCompleteSuccess())
    );

  // ToDo
  // Needs to move in seprate effects.
  @Effect()
  GetRatingCategories$ = this.actions$.ofType(AuthActions.GET_RATING_CATEGEORY).pipe(
    switchMap<Action, Array<RatingCategory>>(_ => {
      return this.authService.getRatingCategories();
    }),
    map(ratingCategory => this.authActions.getRatingCategoriesSuccess(ratingCategory))
  );

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private authActions: AuthActions,
    private checkoutActions: CheckoutActions
  ) { }
}
