import { CheckoutService } from './../../../../../core/services/checkout.service';
import { CheckoutActions } from './../../../../actions/checkout.actions';
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
  @Input() isMobile;
  @Input() lineItem: LineItem;
  image: string;
  name: string;
  quantity: number;
  amount: number;
  quantityCount: any;
  optionTxt: any;
  constructor(
    private store: Store<AppState>,
    private actions: CheckoutActions,
    private checkoutService: CheckoutService,
    private checkoutActions: CheckoutActions,
  ) { }

  ngOnInit() {
    if (this.lineItem.variant.images[0]) {
      this.image = this.lineItem.variant.images[0].product_url;
    }
    this.name = this.lineItem.variant.name;
    this.quantity = this.lineItem.quantity;
    this.amount = this.lineItem.display_amount;
    this.quantityCount = this.quantity;
    this.optionTxt = this.lineItem.variant.options_text;

  }

  removeLineItem() {
    this.checkoutService.deleteLineItem(this.lineItem).subscribe();
  }

  removeQuantity() {
    this.quantityCount -= 1;
    if (this.quantityCount <= 1) {
      this.quantityCount = 1;
      if (this.quantity > 1) {
        this.store.dispatch(this.checkoutActions.addToCart(this.lineItem.variant_id, -1));
      }
    } else if (this.quantityCount > 1) {
      this.store.dispatch(this.checkoutActions.addToCart(this.lineItem.variant_id, -1));
    }
  }

  addQuantity() {
    this.quantityCount += 1;
    this.store.dispatch(this.checkoutActions.addToCart(this.lineItem.variant_id, 1));
  }
}
