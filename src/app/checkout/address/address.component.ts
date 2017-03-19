import { Router } from '@angular/router';
import { CheckoutService } from './../../core/services/checkout.service';
import { getShipAddress, getOrderState } from './../reducers/selectors';
import { AppState } from './../../interfaces';
import { Store } from '@ngrx/store';
import { Address } from './../../core/models/address';
import { Observable, Subscription } from 'rxjs/Rx';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit, OnDestroy {

  getStateSub$: Subscription;
  stateSub$: Subscription;
  orderState: string;
  shipAddress$: Observable<Address>;

  constructor(private store: Store<AppState>,
    private checkoutService: CheckoutService,
    private router: Router) {
      this.shipAddress$ = this.store.select(getShipAddress);
      this.getStateSub$ = this.store.select(getOrderState)
        .subscribe(state => this.orderState = state);
  }

  ngOnInit() {
  }

  checkoutToPayment() {
    if (this.orderState === 'delivery') {
      this.stateSub$ = this.checkoutService.changeOrderState()
        .subscribe();
    }
    this.router.navigate(['/checkout', 'payment']);
  }

  ngOnDestroy() {
    this.getStateSub$.unsubscribe();
    this.stateSub$.unsubscribe();
  }

}
