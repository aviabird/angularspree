import { Subscription } from 'rxjs/Subscription';
import { Router } from '@angular/router';
import { CheckoutService } from './../../core/services/checkout.service';
import { getShipAddress, getOrderState } from './../reducers/selectors';
import { AppState } from './../../interfaces';
import { Store } from '@ngrx/store';
import { Address } from './../../core/models/address';
import { Observable } from 'rxjs/Rx';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit {

  stateSub$: Subscription;
  orderState: string;
  shipAddress$: Observable<Address>;

  constructor(private store: Store<AppState>,
    private checkoutService: CheckoutService,
    private router: Router) {
      this.shipAddress$ = this.store.select(getShipAddress);
      this.stateSub$ = this.store.select(getOrderState)
        .subscribe(state => this.orderState = state);
  }

  ngOnInit() {
  }

  checkoutToPayment() {
    if (this.orderState === 'delivery') {
      this.checkoutService.changeOrderState()
        .subscribe();
    }
    this.router.navigate(['/checkout', 'payment']);
  }

}
