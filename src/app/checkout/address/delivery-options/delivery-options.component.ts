import { AppState } from './../../../interfaces';
import { Store } from '@ngrx/store';
import {
  getTotalCartValue,
  getTotalCartItems,
  getShipTotal,
  getItemTotal,
  getAdjustmentTotal,
  getOrderState,
} from './../../reducers/selectors';
import { Observable, Subscription } from 'rxjs';
import { CheckoutService } from './../../../core/services/checkout.service';
import { Component, OnInit, OnDestroy, EventEmitter, Output } from '@angular/core';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-delivery-options',
  templateUrl: './delivery-options.component.html',
  styleUrls: ['./delivery-options.component.scss']
})
export class DeliveryOptionsComponent implements OnInit, OnDestroy {
  @Output() onCheckoutToPayment = new EventEmitter<boolean>();
  totalCartValue$: Observable<number>;
  totalCartItems$: Observable<number>;
  itemTotal$: Observable<number>;
  shipTotal$: Observable<number>;
  adjustmentTotal$: Observable<number>;
  currency = environment.config.currency_symbol;
  freeShippingAmount = environment.config.freeShippingAmount
  orderSub$: Subscription;
  orderState$: Observable<string>;


  constructor(
    private checkoutService: CheckoutService,
    private store: Store<AppState>) { }

  ngOnInit() {
    this.orderSub$ = this.checkoutService.fetchCurrentOrder()
      .subscribe(_ => {
        this.totalCartValue$ = this.store.select(getTotalCartValue);
        this.totalCartItems$ = this.store.select(getTotalCartItems);
        this.shipTotal$ = this.store.select(getShipTotal);
        this.itemTotal$ = this.store.select(getItemTotal);
        this.adjustmentTotal$ = this.store.select(getAdjustmentTotal);
        this.orderState$ = this.store.select(getOrderState);
      });

  }

  ngOnDestroy() {
    this.orderSub$.unsubscribe();
  }

  checkoutToPayment() {
    this.onCheckoutToPayment.emit();
  }
}
