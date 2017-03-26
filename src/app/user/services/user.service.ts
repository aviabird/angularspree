import { Injectable } from '@angular/core';
import { HttpService } from '../../core/services/http';
import { UserActions } from '../actions/user.actions';
import { Store } from '@ngrx/store';
import { AppState } from '../../interfaces';
import { Observable } from 'rxjs/Rx';
import { Order } from '../../core/models/order';
import { Response } from '@angular/http';
import { User } from '../../core/models/user';

@Injectable()
export class UserService {

  constructor(
    private http: HttpService,
    private actions: UserActions,
    private store: Store<AppState>
  ) { }

  /**
   * Performs a request with `get` http method.
   * @returns Observable<Order[]>
   */
  getOrders(): Observable<Order[]> {
    return this.http.get('api/orders')
      .map((res: Response) => res.json());
  }

  getOrderDetail(orderNumber): Observable<Order> {
    return this.http.get(`spree/api/v1/orders/${orderNumber}`)
      .map((res: Response) => res.json());
  }

  getUser(): Observable<User> {
    const user_id = JSON.parse(localStorage.getItem('user')).id;
    return this.http.get(`spree/api/v1/users/${user_id}`)
      .map(res => res.json());
  }

}
