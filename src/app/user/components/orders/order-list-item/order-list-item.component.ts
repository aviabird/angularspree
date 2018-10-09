import { Component, OnInit, Input } from '@angular/core';
import { Order } from '../../../../core/models/order';
import { LineItem } from '../../../../core/models/line_item';
import { environment } from '../../../../../environments/environment.dev-ng-spree';
import { CheckoutService } from '../../../../core/services/checkout.service';

@Component({
  selector: 'app-order-list-item',
  templateUrl: './order-list-item.component.html',
  styleUrls: ['./order-list-item.component.scss']
})
export class OrderListItemComponent implements OnInit {
  @Input() orders;
  @Input() isMobile;
  currency = environment.config.currency_symbol;

  constructor( ) { }

  ngOnInit() {
    console.log(this.orders);
  }

  getProductImageUrl(line_item: LineItem) {
    return line_item.product.images[0].product_url;
  }
}
