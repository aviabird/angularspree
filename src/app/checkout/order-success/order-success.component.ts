import { getlayoutStateJS } from './../../layout/reducers/layout.selector';
import { LayoutState } from './../../layout/reducers/layout.state';
import { Observable } from 'rxjs/internal/Observable';
import { AppState } from './../../interfaces';
import { Store } from '@ngrx/store';
import { LineItem } from './../../core/models/line_item';
import { Order } from './../../core/models/order';
import { UserService } from './../../user/services/user.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-success',
  templateUrl: './order-success.component.html',
  styleUrls: ['./order-success.component.scss']
})
export class OrderSuccessComponent implements OnInit {
  queryParams: Params;
  orderDetails: Order
  retryCount = 0;
  layoutState$: Observable<LayoutState>;

  constructor(
    private userService: UserService,
    private activatedRouter: ActivatedRoute,
    private route: Router,
    private store: Store<AppState>
  ) {
    this.activatedRouter.queryParams
      .subscribe(params => {
        this.queryParams = params
        if (!this.queryParams.orderReferance) {
          this.route.navigate(['/'])
        }
      });
  }

  ngOnInit() {
    this.layoutState$ = this.store.select(getlayoutStateJS);
    this.userService
      .getOrderDetail(this.queryParams.orderReferance)
      .subscribe(order => {
        this.orderDetails = order
        if (this.orderDetails.shipment_state !== 'ready') {
          this.refresh()
        }
      });
  }

  getProductImageUrl(line_item: LineItem) {
    const image_url = line_item.variant.images[0].small_url;
    return image_url;
  }

  refresh() {
    this.userService
      .getOrderDetail(this.queryParams.orderReferance)
      .subscribe(order => {
        this.orderDetails = order
        this.retryCount = this.retryCount + 1;
        if (this.orderDetails.shipment_state !== 'ready' && this.retryCount <= 5) {
          this.refresh()
        }
      })
  }
}
