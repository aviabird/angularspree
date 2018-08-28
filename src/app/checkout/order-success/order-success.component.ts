import { LineItem } from './../../core/models/line_item';
import { Order } from './../../core/models/order';
import { UserService } from './../../user/services/user.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Component, OnInit, PLATFORM_ID, Inject, OnDestroy } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';
import { Store } from '@ngrx/store';
import { AppState } from '../../interfaces';
import { getlayoutStateJS } from '../../layout/reducers/layout.selector';
import { LayoutState } from '../../layout/reducers/layout.state';

@Component({
  selector: 'app-order-success',
  templateUrl: './order-success.component.html',
  styleUrls: ['./order-success.component.scss']
})
export class OrderSuccessComponent implements OnInit, OnDestroy {

  queryParams: Params;
  orderDetails: Order
  retryCount = 0;
  isMobile = false;
  screenwidth: number;
  subscriptionList$: Array<Subscription> = [];
  layoutState$: Observable<LayoutState>;

  constructor(
    private userService: UserService,
    private activatedRouter: ActivatedRoute,
    private route: Router,
    @Inject(PLATFORM_ID) private platformId: Object,
    private store: Store<AppState>,
  ) {}

  ngOnInit() {
    this.layoutState$ = this.store.select(getlayoutStateJS);

    this.subscriptionList$.push(
      this.activatedRouter.queryParams
      .subscribe(params => {
        this.queryParams = params
        if (!this.queryParams.orderReferance) {
          this.route.navigate(['/'])
        }
      }),
      this.userService
        .getOrderDetail(this.queryParams.orderReferance)
        .subscribe(order => {
          this.orderDetails = order
          if (this.orderDetails.shipment_state !== 'ready') {
            this.refresh()
          }
        })
    );
  }

  ngOnDestroy() {
    this.subscriptionList$.map(sub$ => sub$.unsubscribe());
  }

  getProductImageUrl(line_item: LineItem) {
    const image_url = line_item.variant.images[0].small_url;
    return image_url;
  }

  refresh() {
    this.subscriptionList$.push(
      this.userService
        .getOrderDetail(this.queryParams.orderReferance)
        .subscribe(order => {
          this.orderDetails = order
          this.retryCount = this.retryCount + 1;
          if (this.orderDetails.shipment_state !== 'ready' && this.retryCount <= 5) {
            this.refresh()
          }
        })
    );
  }
}
