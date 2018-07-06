import { Address } from './../../core/models/address';
import { getTotalCartValue, getOrderNumber, getTotalCartItems, getShipAddress, getShipTotal, getItemTotal, getAdjustmentTotal } from './../reducers/selectors';
import { AppState } from './../../interfaces';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { environment } from '../../../environments/environment';
import { CheckoutService } from '../../core/services/checkout.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit, OnDestroy {

  totalCartValue$: Observable<number>;
  totalCartItems$: Observable<number>;
  address$: Observable<Address>;
  orderNumber$: Observable<number>;
  shipTotal$: Observable<number>;
  itemTotal$: Observable<number>;
  adjustmentTotal$: Observable<number>;
  currency = environment.config.currency_symbol;
  orderSub$: Subscription;

  constructor(private store: Store<AppState>,
    private checkoutService: CheckoutService) {
    this.totalCartValue$ = this.store.select(getTotalCartValue);
    this.totalCartItems$ = this.store.select(getTotalCartItems);
    this.address$ = this.store.select(getShipAddress);
    this.orderNumber$ = this.store.select(getOrderNumber);
    this.shipTotal$ = this.store.select(getShipTotal);
    this.itemTotal$ = this.store.select(getItemTotal);
    this.adjustmentTotal$ = this.store.select(getAdjustmentTotal);
  }

  ngOnInit() {
    // this.orderSub$ = this.checkoutService.fetchCurrentOrder().subscribe();
  }

  ngOnDestroy() {
    // this.orderSub$.unsubscribe();
  }
}
