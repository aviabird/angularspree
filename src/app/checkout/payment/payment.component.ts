import { CheckoutService } from './../../core/services/checkout.service';
import { CheckoutActions } from './../actions/checkout.actions';
import { getTotalCartValue } from './../reducers/selectors';
import { AppState } from './../../interfaces';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit, OnDestroy {

  totalCartValue: Observable<number>;

  constructor(private store: Store<AppState>,
    private checkoutActions: CheckoutActions,
    private checkoutService: CheckoutService) {
      this.totalCartValue = this.store.select(getTotalCartValue);
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.store.dispatch(this.checkoutActions.orderCompleteSuccess());
    this.checkoutService.createEmptyOrder()
      .subscribe();
  }

}
