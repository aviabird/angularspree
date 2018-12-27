import { HttpClient } from '@angular/common/http';
import { Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { Order } from '../../core/models/order';
import { User } from '../../core/models/user';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { isPlatformBrowser } from '@angular/common';

@Injectable()
export class UserService {

  constructor(
    private http: HttpClient,
    private toastrService: ToastrService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) { }

  /**
   *
   *
   * @returns {Observable<Order[]>}
   *
   * @memberof UserService
   */
  getOrders(): Observable<Array<Order>> {
    return this.http.get<{data: Array<Order>}>(`api/v1/orders`).pipe(map(resp => resp.data));
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
    const url = `api/v1/orders/${orderNumber}`;
    return this.http.get<{data: Order}>(url).pipe(map(resp => resp.data));
  }

  /**
   *
   *
   * @returns {Observable<User>}
   *
   * @memberof UserService
   */
  getUser(): Observable<User> {
    const user_id = isPlatformBrowser(this.platformId) ? JSON.parse(localStorage.getItem('user')).id : null;
    return this.http.get<{data: User}>(`api/v1/users/${user_id}`).pipe(map(resp => resp.data));
  }

  updateUser(params: any): Observable<User> {
    return this.http.put<{data: User}>(`api/v1/users/${params.user_id}`, params).pipe(map(resp => resp.data));
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
}

