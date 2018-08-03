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
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class UserService {

  constructor(
    private http: HttpClient,
    private actions: UserActions,
    private store: Store<AppState>,
    private toastrService: ToastrService
  ) { }

  /**
   *
   *
   * @returns {Observable<Order[]>}
   *
   * @memberof UserService
   */
  getOrders(email, page): Observable<Array<Order>> {
    return this.http.get<Array<Order>>(`/api/v1/orders/mine?q[s]=id%20desc`)
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

  updateUser(params: any): Observable<User> {
    return this.http.put<User>(`api/v1/users/${params.user_id}`, params);
  }

  updateUserPassword(params: any) {
    return this.http.put(`auth/change_password`, params)
      .pipe(
        map((success: any) => {
          this.toastrService.success(success.status, 'Success!');
          return true;
        }, (error: any) => {
          this.toastrService.error(error.status, 'Error!');
          return false;
        })
      )
  }

  updateUserAddress(updatedAddress) {
      const url = `address/update_address`
      return this.http.post(url, updatedAddress)
  }

  createUserAddress(updatedAddress) {
    const url = `address/create_address`
    return this.http.post(url, updatedAddress)
  }
}

