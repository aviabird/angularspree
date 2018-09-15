import { CheckoutService } from './../../../../../core/services/checkout.service';
import { CheckoutActions } from './../../../../actions/checkout.actions';
import { AppState } from './../../../../../interfaces';
import { Store } from '@ngrx/store';
import { environment } from './../../../../../../environments/environment';
import { LineItem } from './../../../../../core/models/line_item';
import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Price } from '../../../../../core/models/price';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-line-item',
  templateUrl: './line-item.component.html',
  styleUrls: ['./line-item.component.scss']
})
export class LineItemComponent implements OnInit, OnDestroy {
  @Input() isMobile;
  @Input() lineItem: LineItem;
  image: string;
  name: string;
  quantity: number;
  amount: number;
  quantityCount: number;
  optionTxt: string;
  noImageUrl = 'assets/default/no-image-available.jpg'
  unit_price: Price;
  currency = environment.config.currency_symbol;
  subscriptionList$: Array<Subscription> = [];

  constructor(
    private store: Store<AppState>,
    private actions: CheckoutActions,
    private checkoutService: CheckoutService
  ) { }

  ngOnInit() {
    this.image = this.noImageUrl;
    this.name = this.lineItem.product.name;
    this.quantity = this.lineItem.quantity;
    this.unit_price = this.lineItem.unit_price as Price;
    this.amount = this.lineItem.total_price;
    this.quantityCount = this.quantity;
    this.optionTxt = '';
  }

  removeLineItem() {
    this.subscriptionList$.push(
      this.checkoutService.deleteLineItem(this.lineItem.id)
        .subscribe(_ => { this.checkoutService.getOrder().subscribe(); })
    );
  }

  removeQuantity() {
    this.quantityCount -= 1;
    if (this.quantityCount <= 1) {
      this.quantityCount = 1;
      if (this.quantity > 1) {
        this.updateLineItemQuantity(-1);
      }
    } else if (this.quantityCount > 1) {
      this.updateLineItemQuantity(-1);
    }
  }

  addQuantity() {
    this.quantityCount += 1;
    this.updateLineItemQuantity(1);
  }

  updateLineItemQuantity(quantity: number) {
    this.store.dispatch(this.actions.addToCart(this.lineItem.product.id, quantity));
  }

  ngOnDestroy() {
    this.subscriptionList$.forEach(sub$ => sub$.unsubscribe());
  }
}
