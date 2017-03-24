import { Address } from './../../core/models/address';
import { CheckoutService } from './../../core/services/checkout.service';
import { CheckoutActions } from './../actions/checkout.actions';
import { getTotalCartValue, getOrderNumber, getTotalCartItems, getShipAddress } from './../reducers/selectors';
import { AppState } from './../../interfaces';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  totalCartValue$: Observable<number>;
  totalCartItems$: Observable<number>;
  address$: Observable<Address>;
  orderNumber$: Observable<number>;

  constructor(private store: Store<AppState>) {
      this.totalCartValue$ = this.store.select(getTotalCartValue);
      this.totalCartItems$ = this.store.select(getTotalCartItems);
      this.address$ = this.store.select(getShipAddress);
      this.orderNumber$ = this.store.select(getOrderNumber);
  }

  ngOnInit() {
  }

}
