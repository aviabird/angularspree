import { Observable } from 'rxjs/Rx';
import { CartActions } from './actions/cart-actions';
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

  private lineItem: LineItem;

  constructor(private store: Store<AppState>, private actions: CartActions) { }

  ngOnInit() {
    this.store.dispatch(this.actions.fetchCurrentOrder());
  }

  addToCart() {
    this.store.dispatch(this.actions.addToCart(6));
  }

}
