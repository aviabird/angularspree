import { getlayoutStateJS } from './../../layout/reducers/layout.selector';
import { AppState } from './../../interfaces';
import { Store } from '@ngrx/store';
import { LayoutState } from './../../layout/reducers/layout.state';
import { Observable } from 'rxjs/internal/Observable';
import { LineItem } from './../../core/models/line_item';
import { Order } from './../../core/models/order';
import { UserService } from './../../user/services/user.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-order-failed',
  templateUrl: './order-failed.component.html',
  styleUrls: ['./order-failed.component.scss']
})
export class OrderFailedComponent implements OnInit {
  queryParams: Params;
  orderDetails: Order;
  errorReason: string;
  isMobile = false;
  layoutState$: Observable<LayoutState>;
  noImageUrl = 'assets/default/image-placeholder.svg';
  currency = environment.config.currency_symbol;

  constructor(
    private userService: UserService,
    private activatedRouter: ActivatedRoute,
    private route: Router,
    private store: Store<AppState>
  ) {
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
    this.layoutState$ = this.store.select(getlayoutStateJS);
    this.userService
      .getOrderDetail(this.queryParams.orderReferance)
      .subscribe(order => {
        this.orderDetails = order
      });
  }

  getProductImageUrl(line_item: LineItem) {
    const image_url = line_item.product.images[0] ? line_item.product.images[0].product_url : this.noImageUrl;
    return image_url;
  }

}
