import { LineItem } from './../../core/models/line_item';
import { Order } from './../../core/models/order';
import { UserService } from './../../user/services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CheckoutService } from '../../core/services/checkout.service';

@Component({
  selector: 'app-order-failed',
  templateUrl: './order-failed.component.html',
  styleUrls: ['./order-failed.component.scss']
})
export class OrderFailedComponent implements OnInit {
  queryParams: any;
  orderDetails: Order
  errorReason: string;


  constructor(
    private userService: UserService,
    private activatedRouter: ActivatedRoute,
    private route: Router,
    private checkoutService: CheckoutService) {
    this.activatedRouter.queryParams
      .subscribe(params => {
        this.queryParams = params
        this.errorReason = this.queryParams.reason;
        if (!this.queryParams.orderReferance) {
          this.route.navigate(['/'])
        }
      });
  }

  ngOnInit() {
    this.userService
      .getOrderDetail(this.queryParams.orderReferance)
      .subscribe(order => {
        this.orderDetails = order
      })
  }

  getProductImageUrl(line_item: LineItem) {
    const image_url = line_item.variant.images[0].small_url;
    return image_url;
  }

  retryPayment(order: Order) {
    this.checkoutService.makePayment(+order.total, order.bill_address, order.number)
      .subscribe((response: any) => {
        response = response
        window.open(response.url, '_self');
      });
  }

}
