import { AppState } from './../../../interfaces';
import { Store } from '@ngrx/store';
import { getTotalCartValue, getTotalCartItems, getShipTotal, getItemTotal, getAdjustmentTotal } from './../../reducers/selectors';
import { Observable, Subscription } from 'rxjs';
import { CheckoutService } from './../../../core/services/checkout.service';
import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-delivery-options',
  templateUrl: './delivery-options.component.html',
  styleUrls: ['./delivery-options.component.scss']
})
export class DeliveryOptionsComponent implements OnInit, OnDestroy {
  @Input() orderNumber;
  totalCartValue$: Observable<number>;
  totalCartItems$: Observable<number>;
  itemTotal$: Observable<number>;
  shipTotal$: Observable<number>;
  adjustmentTotal$: Observable<number>;
  currency = environment.config.currency_symbol;
  freeDeliveryAmount = environment.config.free_shipping_order_amount
  orderSub$: Subscription;

  constructor(private checkoutService: CheckoutService, private store: Store<AppState>) {
    this.totalCartValue$ = this.store.select(getTotalCartValue);
    this.totalCartItems$ = this.store.select(getTotalCartItems);
    this.shipTotal$ = this.store.select(getShipTotal);
    this.itemTotal$ = this.store.select(getItemTotal);
    this.adjustmentTotal$ = this.store.select(getAdjustmentTotal);
  }

  ngOnInit() {
    this.orderSub$ = this.checkoutService.fetchCurrentOrder().subscribe();
  }
  ngOnDestroy() {
    this.orderSub$.unsubscribe();
  }
}
