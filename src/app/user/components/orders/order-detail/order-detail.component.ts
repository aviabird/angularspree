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
  isMobile = false;
  screenwidth: any;
  currency = environment.config.currency_symbol;
  noImageUrl = 'assets/default/image-placeholder.svg';

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private checkoutService: CheckoutService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) { }

  ngOnInit() {
    this.routeSubscription$ = this.route.params.subscribe(
      (params: Object) => {
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
    const imageUrl = line_item.product.images[0];
    return imageUrl ? imageUrl.product_url : this.noImageUrl;
  }

  ngOnDestroy() {
    this.routeSubscription$.unsubscribe();
    this.orderSubscription$.unsubscribe();
  }
}
