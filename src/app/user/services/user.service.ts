import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserActions } from '../actions/user.actions';
import { Store } from '@ngrx/store';
import { AppState } from '../../interfaces';
import { Order } from '../../core/models/order';
import { Response } from '@angular/http';
import { User } from '../../core/models/user';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class UserService {

  constructor(
    private http: HttpClient,
    private actions: UserActions,
    private store: Store<AppState>
  ) { }

  /**
   *
   *
   * @returns {Observable<Order[]>}
   *
   * @memberof UserService
   */
  getOrders(email, page): Observable<Array<Order>> {
    return this.http.get<Array<Order>>(`/api/v1/orders/mine?per_page=5&q[s]=id%20desc&page=${page}`)
      .pipe(
        map(data => data)
      )
  }

  /**
   *
   *
   * @param {string} orderNumber
   * @returns {Observable<Order>}
   *
   * @memberof UserService
   */
  getOrderDetail(orderNumber: string): Observable<Order> {
    return this.http.get<Order>(`api/v1/orders/${orderNumber}`)
  }

  /**
   *
   *
   * @returns {Observable<User>}
   *
   * @memberof UserService
   */
  getUser(): Observable<User> {
    const user_id = JSON.parse(localStorage.getItem('user')).id;
    return this.http.get<User>(`api/v1/users/${user_id}`);
  }

}
