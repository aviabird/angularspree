import { isPlatformBrowser } from '@angular/common';
import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../../interfaces';
import { UserActions } from '../../actions/user.actions';
import { Observable } from 'rxjs';
import { Order } from '../../../core/models/order';
import { getUserOrders } from '../../reducers/selector';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  orders$: Observable<Order[]>;
  page: number;
  email: string;
  isMobile = false;
  screenwidth: any;
  constructor(
    private store: Store<AppState>,
    private userActions: UserActions,
    @Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    this.store.dispatch(this.userActions.getUserOrders());
    this.orders$ = this.store.select(getUserOrders); 
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

  pageChanged(event: any): void {
    this.page = event.page;
    this.store.dispatch(this.userActions.getUserOrders());
  }

}
