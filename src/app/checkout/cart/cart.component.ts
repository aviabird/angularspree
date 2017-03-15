import { getTotalCartValue } from './../reducers/selectors';
import { Observable } from 'rxjs/Observable';
import { CheckoutService } from './../../core/services/checkout.service';
import { CheckoutActions } from './../actions/checkout.actions';
import { AppState } from './../../interfaces';
import { Store } from '@ngrx/store';
import { LineItem } from './../../core/models/line_item';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  variant_id = 1;
  totalCartValue$: Observable<number>;

  constructor(private store: Store<AppState>, private actions: CheckoutActions, private checkoutService: CheckoutService) { 
    this.totalCartValue$ = this.store.select(getTotalCartValue);
  }

  ngOnInit() {
    // this.store.dispatch(this.actions.fetchCurrentOrder());
    this.checkoutService.fetchCurrentOrder()
      .subscribe();
  }

  addToCart() {
    this.variant_id++;
    // this.store.dispatch(this.actions.addToCart(this.variant_id));
    this.checkoutService.createNewLineItem(this.variant_id)
      .subscribe();
  }

}
