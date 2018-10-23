import { Address } from './../../core/models/address';
import { Action } from '@ngrx/store';
import { map, switchMap } from 'rxjs/operators';
import { CheckoutService } from './../../core/services/checkout.service';
import { CheckoutActions } from './../actions/checkout.actions';
import { Effect, Actions } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { Order } from '../../core/models/order';
import { AddressService } from '../address/services/address.service';
import { PaymentService } from '../payment/services/payment.service';
import { Router } from '@angular/router';

@Injectable()
export class CheckoutEffects {
  isBuyNowAction: boolean;

  @Effect()
  AddToCart$ = this.actions$.ofType(CheckoutActions.ADD_TO_CART).pipe(
    switchMap<Action & { payload: { variant_id: number, quantity: number, isBuyNow: boolean } }, Order>(action => {
      this.isBuyNowAction = action.payload.isBuyNow;
      return this.checkoutService.createNewLineItem(
        action.payload.variant_id,
        action.payload.quantity
      );
    }),
    map(order => {
      if (this.isBuyNowAction) {
        this.router.navigate(['checkout', 'cart'])
      }
      return this.actions.fetchCurrentOrderSuccess(order)
    })
  );

  @Effect()
  OrderDetails$ = this.actions$.ofType(CheckoutActions.GET_ORDER_DETAILS).pipe(
    switchMap<Action, Order>(_ => this.checkoutService.getOrder()),
    map(order => this.actions.fetchCurrentOrderSuccess(order))
  );


  @Effect()
  BindAddress$ = this.actions$.ofType(CheckoutActions.BIND_ADDRESS).pipe(
    switchMap<Action & { payload: { address: Address, orderId: number } }, Order>(action => {
      return this.addressService.
        bindAddressToOrder(action.payload.address, action.payload.orderId);
    }),
    map(order => this.actions.fetchCurrentOrderSuccess(order))
  );


  @Effect()
  BindPayment$ = this.actions$.ofType(CheckoutActions.BIND_PAYMENT).pipe(
    switchMap<Action & { payload: { paymentMethodId: number, orderId: number, orderAmount: number } }, Order>(action => {
      return this.paymentService.addPaymentToOrder(
        action.payload.paymentMethodId,
        action.payload.orderId,
        action.payload.orderAmount);
    }),
    map(order => this.actions.getOrderPaymentsSuccess(order))
  );

  @Effect()
  ShippingPreferencess$ = this.actions$.ofType(CheckoutActions.SHIPPING_PREFERENCES).pipe(
    switchMap<Action & { payload: { orderId: number, packages: Array<{}> } }, Order>(action => {
      return this.checkoutService.saveShippingPreferences(
        action.payload.orderId,
        action.payload.packages);
    }),
    map(order => {
      this.router.navigate(['/checkout', 'payment'])
      return this.actions.fetchCurrentOrderSuccess(order)
    })
  );

  constructor(
    private actions$: Actions,
    private checkoutService: CheckoutService,
    private actions: CheckoutActions,
    private addressService: AddressService,
    private paymentService: PaymentService,
    private router: Router
  ) { }
}
