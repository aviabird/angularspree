import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../../interfaces';
import { UserActions } from '../../actions/user.actions';
import { Observable } from 'rxjs/Observable';
import { Order } from '../../../core/models/order';
import { getUserOrders } from '../../reducers/selector';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  orders$: Observable<Order[]>;

  constructor(
    private store: Store<AppState>,
    private userActions: UserActions
  ) {
    this.orders$ = this.store.select(getUserOrders);
  }

  ngOnInit() {
    this.store.dispatch(this.userActions.getUserOrders());
  }

}
