import { CheckoutService } from './../../../../../core/services/checkout.service';
import { CheckoutActions } from './../../../../actions/checkout.actions';
import { AppState } from './../../../../../interfaces';
import { Store } from '@ngrx/store';
import { environment } from './../../../../../../environments/environment';
import { LineItem } from './../../../../../core/models/line_item';
import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Price } from '../../../../../core/models/price';
import { Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';

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
  optionName: string;
  optionValue: string;
  noImageUrl = 'assets/default/image-placeholder.svg'
  unit_price: Price;
  currency = environment.config.currency_symbol;
  subscriptionList$: Array<Subscription> = [];

  constructor(
    private store: Store<AppState>,
    private actions: CheckoutActions,
    private checkoutService: CheckoutService
  ) { }

  ngOnInit() {
    const lineItem = this.lineItem.product;
    if (lineItem) {
      this.image = lineItem.images[0] ? lineItem.images[0].product_url : this.noImageUrl;
      this.name = lineItem.name;
      this.quantity = this.lineItem.quantity;
      this.unit_price = this.lineItem.unit_price as Price;
      this.amount = this.lineItem.total_price;
      this.quantityCount = this.quantity;
      // this.optionName = lineItem.options.length ? lineItem.options[0].option_type.display_name : '';
      // this.optionValue = lineItem.options.length ? lineItem.options[0].value : '';
    }
  }

  removeLineItem() {
    this.subscriptionList$.push(
      this.checkoutService.deleteLineItem(this.lineItem.id).pipe(
        switchMap(_ => {
          return this.checkoutService.fetchCurrentOrder();
        })
      ).subscribe()
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
    this.store.dispatch(this.actions.addToCart(this.lineItem.product.id, quantity, false));
  }

  ngOnDestroy() {
    this.subscriptionList$.forEach(sub$ => sub$.unsubscribe());
  }
}
