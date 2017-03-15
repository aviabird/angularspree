import { CheckoutActions } from './../actions/checkout.actions';
import { CartService } from './../../core/services/cart.service';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Effect, Actions } from '@ngrx/effects';
import { Injectable } from '@angular/core';

@Injectable()
export class CheckoutEffects {

  constructor(private actions$: Actions,
    private cartService: CartService,
    private actions: CheckoutActions) {}

  // tslint:disable-next-line:member-ordering
  // @Effect()
    // FetchCurrentOrder$ = this.actions$
    // .ofType(CartActions.FETCH_CURRENT_ORDER)
    // .switchMap((action: Action) => {
    //   return this.cartService.fetchCurrentOrder();
    // })
    // .map((order: Order) => {
    //   return this.cartActions.fetchCurrentOrderSuccess(order);
    // });

  // @Effect()
  //   AddToCart$ = this.actions$
  //   .ofType(CartActions.ADD_TO_CART)
  //   .switchMap((action: Action) => {
  //     return this.cartService.createNewLineItem(action.payload);
  //   })
  //   .map((lineItem: LineItem) => this.cartActions.addToCartSuccess(lineItem));


  // Use this effect once angular releases RC4

  // @Effect()
  //   RemoveLineItem$ = this.actions$
  //   .ofType(CartActions.REMOVE_LINE_ITEM)
  //   .switchMap((action: Action) => {
  //     return this.cartService.deleteLineItem(action.payload);
  //   })
  //   .map(() => this.cartActions.removeLineItemSuccess());

}
