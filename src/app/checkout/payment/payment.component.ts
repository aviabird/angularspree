import { CheckoutService } from './../../core/services/checkout.service';
import { CheckoutActions } from './../actions/checkout.actions';
import { getTotalCartValue, getOrderNumber } from './../reducers/selectors';
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
  orderNumber$: Observable<number>;

  constructor(private store: Store<AppState>) {
      this.totalCartValue$ = this.store.select(getTotalCartValue);
      this.orderNumber$ = this.store.select(getOrderNumber);
  }

  ngOnInit() {
  }

}
