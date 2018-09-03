import { CheckoutService } from './../../../../../core/services/checkout.service';
import { CheckoutActions } from './../../../../actions/checkout.actions';
import { AppState } from './../../../../../interfaces';
import { Store } from '@ngrx/store';
import { environment } from './../../../../../../environments/environment';
import { LineItem } from './../../../../../core/models/line_item';
import { Component, OnInit, Input } from '@angular/core';
import { Price } from '../../../../../core/models/price';

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
  noImageUrl = 'assets/default/no-image-available.jpg'
  unit_price: Price;
  currency = environment.config.currency_symbol;

  constructor(
    private store: Store<AppState>,
    private actions: CheckoutActions,
    private checkoutService: CheckoutService,
    private checkoutActions: CheckoutActions,
  ) { }

  ngOnInit() {
    this.image = this.noImageUrl;
    this.name = this.lineItem.product.name;
    this.quantity = this.lineItem.quantity;
    this.unit_price = this.lineItem.unit_price as Price;
    this.amount = (parseFloat(this.unit_price.amount) * this.quantity);
    this.quantityCount = this.quantity;
    this.optionTxt = 'TODO'
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
    this.store.dispatch(this.checkoutActions.addToCart(this.lineItem.product.id, 1));
    this.store.dispatch(this.actions.getOrderDetails());
  }
}
