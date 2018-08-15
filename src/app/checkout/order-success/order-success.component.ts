import { LineItem } from './../../core/models/line_item';
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
  retryCount = 0;
  isMobile = false;
  screenwidth: any;
  constructor(
    private userService: UserService,
    private activatedRouter: ActivatedRoute,
    private route: Router,
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
        if (this.orderDetails.shipment_state !== 'ready') {
          this.refresh()
        }
      })

    this.screenwidth = window.innerWidth;

    this.calculateInnerWidth();
  }
  calculateInnerWidth() {
    if (this.screenwidth <= 1000) {

      this.isMobile = this.screenwidth;
    }
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
