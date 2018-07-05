import { Router } from '@angular/router';
import { getTotalCartValue, getOrderState, getTotalCartItems, getShipTotal, getItemTotal } from './../reducers/selectors';
import { Observable, Subscription } from 'rxjs';
import { CheckoutService } from './../../core/services/checkout.service';
import { CheckoutActions } from './../actions/checkout.actions';
import { AppState } from './../../interfaces';
import { Store } from '@ngrx/store';
import { LineItem } from './../../core/models/line_item';
import { Component, OnInit, OnDestroy, OnChanges } from '@angular/core';
import { Order } from '../../core/models/order';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  screenwidth;
  isMobile;
  totalCartValue$: Observable<number>;
  totalCartItems$: Observable<number>;
  shipTotal$: Observable<number>;
  itemTotal$: Observable<number>;
  orderSub: any;

  constructor(private store: Store<AppState>,
    private checkoutService: CheckoutService) {
    this.totalCartValue$ = this.store.select(getTotalCartValue);
    this.totalCartItems$ = this.store.select(getTotalCartItems);
    this.shipTotal$ = this.store.select(getShipTotal);
    this.itemTotal$ = this.store.select(getItemTotal);
  }

  ngOnInit() {
    this.screenwidth = window.innerWidth;
    this.calculateInnerWidth();
  }
  calculateInnerWidth() {
    if (this.screenwidth <= 1000) {
      this.isMobile = this.screenwidth;
    }
  }


}
