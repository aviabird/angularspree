import { LineItem } from './../../core/models/line_item';
import { Order } from './../../core/models/order';
import { UserService } from './../../user/services/user.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Component, OnInit, PLATFORM_ID, Inject, OnDestroy } from '@angular/core';
import { CheckoutService } from '../../core/services/checkout.service';
import { isPlatformBrowser } from '../../../../node_modules/@angular/common';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-order-failed',
  templateUrl: './order-failed.component.html',
  styleUrls: ['./order-failed.component.scss']
})
export class OrderFailedComponent implements OnInit, OnDestroy {
  queryParams: Params;
  orderDetails: Order;
  errorReason: string;
  isMobile = false;
  screenwidth: number;
  subscriptionList$: Array<Subscription> = [];

  constructor(
    private userService: UserService,
    private activatedRouter: ActivatedRoute,
    private route: Router,
    private checkoutService: CheckoutService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) { }

  ngOnInit() {
    this.subscriptionList$.push(
      this.activatedRouter.queryParams
        .subscribe(params => {
          this.queryParams = params
          this.errorReason = this.queryParams.reason;
          if (!this.queryParams.orderReferance) {
            this.route.navigate(['/'])
          }
        }),
      this.userService
        .getOrderDetail(this.queryParams.orderReferance)
        .subscribe(order => {
          this.orderDetails = order
        })
    );
    this.calculateInnerWidth();
  }

  ngOnDestroy() {
    this.subscriptionList$.map(sub$ => sub$.unsubscribe());
  }

  calculateInnerWidth() {
    if (isPlatformBrowser(this.platformId)) {
      this.screenwidth = window.innerWidth;
      if (this.screenwidth <= 1000) {
        this.isMobile = true;
      }
    }
  }

  getProductImageUrl(line_item: LineItem) {
    const image_url = line_item.variant.images[0].small_url;
    return image_url;
  }

  retryPayment(order: Order) {
    this.subscriptionList$.push(
      this.checkoutService.makePayment(+order.total, order.bill_address, order.number)
        .subscribe((resp: any) => {
          if (isPlatformBrowser(this.platformId)) {
            window.open(resp.url, '_self');
          }
        })
    );
  }

}
