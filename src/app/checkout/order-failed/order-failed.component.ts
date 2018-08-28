import { getlayoutStateJS } from './../../layout/reducers/layout.selector';
import { AppState } from './../../interfaces';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { LayoutState } from './../../layout/reducers/layout.state';
import { tap } from 'rxjs/operators';
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
  layoutState$: Observable<LayoutState>;

  constructor(
    private userService: UserService,
    private activatedRouter: ActivatedRoute,
    private route: Router,
    private checkoutService: CheckoutService,
    @Inject(PLATFORM_ID) private platformId: Object,
    private store: Store<AppState>,
  ) { }

  ngOnInit() {
    this.layoutState$ = this.store.select(getlayoutStateJS);

    this.subscriptionList$.push(
      this.activatedRouter.queryParams
        .pipe(
          tap(({ orderReferance }) => {
            this.subscriptionList$.push(
              this.userService
              .getOrderDetail(orderReferance)
              .subscribe(order => this.orderDetails = order)
            )
          })
        )
        .subscribe(({ reason, orderReferance }) => {
          this.errorReason = reason;
          if (!orderReferance) { this.route.navigate(['/']) }
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
