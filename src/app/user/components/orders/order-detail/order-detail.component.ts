import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../interfaces';
import { UserActions } from '../../../actions/user.actions';
import { UserService } from '../../../services/user.service';
import { Order } from '../../../../core/models/order';
import { ActivatedRoute } from '@angular/router';
import { Subscription ,  Observable } from 'rxjs';
import { environment } from '../../../../../environments/environment';
import { LineItem } from '../../../../core/models/line_item';

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

  constructor(
    private userService: UserService,
    private route: ActivatedRoute
  ) {
  }

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
  }

  getProductImageUrl(line_item: LineItem) {
    return line_item.variant.images[0].small_url;
  }

  ngOnDestroy() {
    this.routeSubscription$.unsubscribe();
    this.orderSubscription$.unsubscribe();
  }

}
