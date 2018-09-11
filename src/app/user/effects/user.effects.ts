
import { switchMap, map } from 'rxjs/operators';
import { ProductService } from './../../core/services/product.service';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { UserService } from '../services/user.service';
import { UserActions } from '../actions/user.actions';
import { AddressService } from '../../checkout/address/services/address.service';

@Injectable()
export class UserEffects {
  constructor(
    private actions$: Actions,
    private userService: UserService,
    private userActions: UserActions,
    private productService: ProductService,
  ) { }

  // tslint:disable-next-line:member-ordering
  @Effect()
  GetUserOrders$: Observable<Action> = this.actions$
    .ofType(UserActions.GET_USER_ORDERS).pipe(
      switchMap((action: any) => this.userService.getOrders(action.payload.email, action.payload.page)),
      map((orders) => this.userActions.getUserOrdersSuccess(orders)));

  // tslint:disable-next-line:member-ordering
  @Effect()
  GetUserFavoriteProducts$: Observable<Action> = this.actions$
    .ofType(UserActions.GET_USER_FAVORITE_PRODUCTS).pipe(
      switchMap(() => this.productService.getUserFavoriteProducts()),
      map((products) => this.userActions.getUserFavoriteProductsSuccess(products)));

  // tslint:disable-next-line:member-ordering
  @Effect()
  FetchUserAddress$: Observable<Action> = this.actions$
    .ofType(UserActions.FETCH_USER_ADDRESS)
    .pipe(
      switchMap((action: any) => this.userService.getUserAddresses()),
      map((addressList) =>
        this.userActions.fetchUserAddressSuccess(addressList)
      )
    );

  // tslint:disable-next-line:member-ordering
  @Effect()
  FetchCountries$: Observable<Action> = this.actions$
    .ofType(UserActions.FETCH_COUNTRIES)
    .pipe(
      switchMap((action: any) => this.userService.getCountires()),
      map((countries) =>
        this.userActions.fetchCountriesSuccess(countries)
      )
    );

  // tslint:disable-next-line:member-ordering
  @Effect()
  FetchStates$: Observable<Action> = this.actions$
    .ofType(UserActions.FETCH_STATES)
    .pipe(
      switchMap((action: any) =>
       this.userService.getAllStates(action.payload)),
      map((states) =>
        this.userActions.fetchStatesSuccess(states)
      )
    );
}
