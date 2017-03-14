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

  lineItems$: Observable<LineItem[]>;
  private lineItem: LineItem;

  constructor(private store: Store<AppState>, private actions: CartActions) { }

  ngOnInit() {
  }

  addToCart() {
    this.lineItem = this.getNewLineItem();
    this.store.dispatch(this.actions.addLineItem(this.lineItem));

  }

  getNewLineItem(): LineItem {
    return {
      id: 1,
      quantity: 2,
      price: 40.22,
      variant_id: 4,
      single_display_amount: 40.22,
      display_amount: 40.22,
      total: 80.44
    };
  }

}
