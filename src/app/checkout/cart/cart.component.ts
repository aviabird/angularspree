import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { getTotalCartValue, getOrderState, getTotalCartItems } from './../reducers/selectors';
import { Observable } from 'rxjs/Observable';
import { CheckoutService } from './../../core/services/checkout.service';
import { CheckoutActions } from './../actions/checkout.actions';
import { AppState } from './../../interfaces';
import { Store } from '@ngrx/store';
import { LineItem } from './../../core/models/line_item';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit, OnDestroy {

  stateSub$: Subscription;
  orderState: string;
  totalCartValue$: Observable<number>;
  totalCartItems: Observable<number>;

  constructor(private store: Store<AppState>,
    private actions: CheckoutActions,
    private checkoutService: CheckoutService,
    private router: Router) {
      this.totalCartValue$ = this.store.select(getTotalCartValue);
      this.stateSub$ = this.store.select(getOrderState)
        .subscribe(state => this.orderState = state);
  }

  ngOnInit() {
    this.totalCartItems = this.store.select(getTotalCartItems);
  }

  placeOrder() {
    if (this.orderState === 'cart') {
      this.checkoutService.changeOrderState()
        .subscribe();
    }
    this.router.navigate(['/checkout', 'address']);
  }

  ngOnDestroy() {
    this.stateSub$.unsubscribe();
  }

}
