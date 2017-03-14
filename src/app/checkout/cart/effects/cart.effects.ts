import { LineItem } from './../../../core/models/line_item';
import { CartService } from './../../../core/services/cart.service';
import { Action } from '@ngrx/store';
import { CartActions } from './../actions/cart-actions';
import { Observable } from 'rxjs/Observable';
import { Effect, Actions } from '@ngrx/effects';
import { Injectable } from '@angular/core';

@Injectable()
export class CartEffects {

  @Effect()
    AddLineItem$ = this.actions$
    .ofType(CartActions.ADD_TO_CART)
    .switchMap((action: Action) => {
      return this.cartService.createNewLineItem(action.payload);
    })
    .map((lineItem: LineItem) => this.cartActions.addToCartSuccess(lineItem));

  constructor(private actions$: Actions,
    private cartService: CartService,
    private cartActions: CartActions) {}

}
