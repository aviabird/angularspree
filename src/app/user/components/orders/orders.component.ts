import { Component, OnInit } from '@angular/core';
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

  constructor(
    private store: Store<AppState>,
    private userActions: UserActions
  ) {

    this.orders$ = this.store.select(getUserOrders);

  }

  ngOnInit() {
    if (JSON.parse(localStorage.getItem('user'))) {
      this.email = JSON.parse(localStorage.getItem('user')).email
      this.store.dispatch(this.userActions.getUserOrders(this.email, 1));
    }
  }

  pageChanged(event: any): void {
    this.page = event.page;
    this.store.dispatch(this.userActions.getUserOrders(this.email, this.page));
  }

}
