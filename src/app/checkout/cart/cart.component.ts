import { CheckoutActions } from './../actions/checkout.actions';
import { CartService } from './../../core/services/cart.service';
import { Observable } from 'rxjs/Rx';
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

  constructor(private store: Store<AppState>, private actions: CheckoutActions, private cartService: CartService) { }

  ngOnInit() {
    // this.store.dispatch(this.actions.fetchCurrentOrder());
    this.cartService.fetchCurrentOrder()
      .subscribe();
  }

  addToCart() {
    this.variant_id++;
    // this.store.dispatch(this.actions.addToCart(this.variant_id));
    this.cartService.createNewLineItem(this.variant_id)
      .subscribe();
  }

}
