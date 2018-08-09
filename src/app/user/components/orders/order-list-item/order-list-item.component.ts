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
  payubiz = environment.config.PaymentMethodPayubiz;
  constructor( private checkoutService: CheckoutService) { }

  ngOnInit() {
  }

  getProductImageUrl(line_item: LineItem) {
    return line_item.variant.images[0].small_url;
  }
  retryPayment(order: Order) {
    this.checkoutService.makePayment(+order.total, order.bill_address, order.number)
      .subscribe((response: any) => {
        response = response
        window.open(response.url, '_self');
      });
  }
}
