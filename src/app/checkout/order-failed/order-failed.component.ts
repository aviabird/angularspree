import { getlayoutStateJS } from './../../layout/reducers/layout.selector';
import { AppState } from './../../interfaces';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { LayoutState } from './../../layout/reducers/layout.state';
import { tap, switchMap } from 'rxjs/operators';
import { LineItem } from './../../core/models/line_item';
import { Order } from './../../core/models/order';
import { UserService } from './../../user/services/user.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, of } from 'rxjs';

@Component({
  selector: 'app-order-failed',
  templateUrl: './order-failed.component.html',
  styleUrls: ['./order-failed.component.scss']
})
export class OrderFailedComponent implements OnInit, OnDestroy {
  queryParams: Params;
  orderDetails: Order;
  errorReason: string;
  subscriptionList$: Array<Subscription> = [];
  layoutState$: Observable<LayoutState>;

  constructor(
    private userService: UserService,
    private activatedRouter: ActivatedRoute,
    private route: Router,
    private store: Store<AppState>,
  ) { }

  ngOnInit() {
    this.layoutState$ = this.store.select(getlayoutStateJS);

    this.subscriptionList$.push(
      this.activatedRouter.queryParams
        .pipe(
          switchMap(params => {
            const { reason, orderReferance } = params;
            this.errorReason = reason;
            if (!orderReferance) {
              this.route.navigate(['/'])
              return of(params);
            }
            return this.userService
              .getOrderDetail(orderReferance)
              .pipe(tap(order => this.orderDetails = order));
          })
        )
        .subscribe()
    );
  }

  ngOnDestroy() {
    this.subscriptionList$.map(sub$ => sub$.unsubscribe());
  }

  getProductImageUrl(line_item: LineItem) {
    const image_url = line_item.variant.images[0].small_url;
    return image_url;
  }

  // retryPayment(order: Order) {
  //   this.checkoutService.makePayment(+order.total, order.bill_address, order.number)
  //     .subscribe((response: any) => {
  //       response = response;
  //       if (isPlatformBrowser(this.platformId)) {
  //         window.open(response.url, '_self');
  //       }
  //     });
  // }

}
