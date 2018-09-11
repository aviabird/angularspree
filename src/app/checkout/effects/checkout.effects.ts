import { map, switchMap } from 'rxjs/operators';
import { LineItem } from './../../core/models/line_item';
import { CheckoutService } from './../../core/services/checkout.service';
import { CheckoutActions } from './../actions/checkout.actions';
import { Effect, Actions } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { Order } from '../../core/models/order';
import { AddressService } from '../address/services/address.service';
import { PaymentService } from '../payment/services/payment.service';

@Injectable()
export class CheckoutEffects {
  constructor(
    private actions$: Actions,
    private checkoutService: CheckoutService,
    private actions: CheckoutActions,
    private addressService: AddressService,
    private paymentService: PaymentService
  ) { }

  // tslint:disable-next-line:member-ordering
  @Effect()
  AddToCart$ = this.actions$.ofType(CheckoutActions.ADD_TO_CART).pipe(
    switchMap((action: any) => {
      return this.checkoutService.createNewLineItem(
        action.payload.variant_id,
        action.payload.quantity
      );
    }),
    map((lineItem: LineItem) => this.actions.addToCartSuccess(lineItem))
  );

  // tslint:disable-next-line:member-ordering
  @Effect()
  OrderDetails$ = this.actions$.ofType(CheckoutActions.GET_ORDER_DETAILS).pipe(
    switchMap((action: any) => {
      return this.checkoutService.getOrder();
    }),
    map((order: Order) => this.actions.getOrderDetailsSuccess(order))
  );


  // tslint:disable-next-line:member-ordering
  @Effect()
  BindAddress$ = this.actions$.ofType(CheckoutActions.BIND_ADDRESS).pipe(
    switchMap((action: any) => {
      return this.addressService.
        bindAddressToOrder(action.payload.address, action.payload.orderId);
    }),
    map((order: Order) => this.actions.getOrderDetailsSuccess(order))
  );


  // tslint:disable-next-line:member-ordering
  @Effect()
  BindPayment$ = this.actions$.ofType(CheckoutActions.BIND_PAYMENT).pipe(
    switchMap((action: any) => {
      return this.paymentService.addPaymentToOrder(
        action.payload.paymentMethodId,
        action.payload.orderId,
        action.payload.orderAmount);
    }),
    map((order: Order) => this.actions.getOrderPaymentsSuccess(order))
  );
}
