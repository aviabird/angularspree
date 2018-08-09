import { isPlatformBrowser } from '@angular/common';
import { Component, OnInit, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { Order } from '../../../../core/models/order';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { environment } from '../../../../../environments/environment';
import { LineItem } from '../../../../core/models/line_item';
import { CheckoutService } from '../../../../core/services/checkout.service';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.scss']
})
export class OrderDetailComponent implements OnInit, OnDestroy {
  routeSubscription$: Subscription;
  orderSubscription$: Subscription;
  orderNumber: string;
  order: Order;
  title = environment.appName;
  payubiz = environment.config.PaymentMethodPayubiz
  isMobile = false;
  screenwidth: any;
  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private checkoutService: CheckoutService,
    @Inject(PLATFORM_ID) private platformId: any
  ) { }

  ngOnInit() {
    this.routeSubscription$ = this.route.params.subscribe(
      (params: any) => {
        this.orderNumber = params['number'];
        this.orderSubscription$ =
          this.userService
            .getOrderDetail(this.orderNumber)
            .subscribe(order => this.order = order);
      }
    );
    if (isPlatformBrowser(this.platformId)) {
      this.screenwidth = window.innerWidth;
    }
    this.calculateInnerWidth();
  }
  calculateInnerWidth() {
    if (this.screenwidth <= 1000) {
      this.isMobile = this.screenwidth;
    }
  }
  getProductImageUrl(line_item: LineItem) {
    return line_item.variant.images[0].small_url;
  }

  ngOnDestroy() {
    this.routeSubscription$.unsubscribe();
    this.orderSubscription$.unsubscribe();
  }

  retryPayment(order: Order) {
    this.checkoutService.makePayment(+order.total, order.bill_address, order.number)
      .subscribe((response: any) => {
        response = response;
        if (isPlatformBrowser(this.platformId)) {
          window.open(response.url, '_self');
        }
      });
  }
}
