import { CartService } from './../../../../../core/services/cart.service';
import { CartActions } from './../../../actions/cart-actions';
import { AppState } from './../../../../../interfaces';
import { Store } from '@ngrx/store';
import { environment } from './../../../../../../environments/environment';
import { LineItem } from './../../../../../core/models/line_item';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-line-item',
  templateUrl: './line-item.component.html',
  styleUrls: ['./line-item.component.scss']
})
export class LineItemComponent implements OnInit {

  image: string;
  name: string;
  quantity: number;
  amount: number;

  @Input() lineItem: LineItem;

  constructor(private store: Store<AppState>, private actions: CartActions, private cartService: CartService) { }

  ngOnInit() {
    this.image = environment.API_ENDPOINT + this.lineItem.variant.images[0].product_url;
    this.name = this.lineItem.variant.name;
    this.quantity = this.lineItem.quantity;
    this.amount = this.lineItem.display_amount;
  }

  // Change this method once angular releases RC4
  // Follow this linke to know more about this issue https://github.com/angular/angular/issues/12869
  removeLineItem() {
    // this.store.dispatch(this.actions.removeLineItem(this.lineItem.id));
  this.cartService.deleteLineItem(this.lineItem.id, this.lineItem.quantity);
  }

}
