import { LineItem } from './../../core/models/line_item';
import { environment } from './../../../environments/environment';
import { CheckoutActions } from './../actions/checkout.actions';
import { Store } from '@ngrx/store';
import { AppState } from './../../interfaces';
import { Order } from './../../core/models/order';
import { UserService } from './../../user/services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-success',
  templateUrl: './order-success.component.html',
  styleUrls: ['./order-success.component.scss']
})
export class OrderSuccessComponent implements OnInit {

  queryParams: any;
  orderDetails: Order

  constructor(
    private userService: UserService,
    private activatedRouter: ActivatedRoute,
    private route: Router,
    private store: Store<AppState>,
    private actions: CheckoutActions
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
    this.userService
      .getOrderDetail(this.queryParams.orderReferance)
      .subscribe(order => {
        this.orderDetails = order
        console.log(this.orderDetails)
      })
  }

  getProductImageUrl(line_item: LineItem) {
    const image_url = line_item.variant.images[0].small_url;
    return environment.apiEndpoint + image_url;
  }

}
