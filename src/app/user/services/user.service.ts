import { HttpClient } from '@angular/common/http';
import { Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { Order } from '../../core/models/order';
import { User } from '../../core/models/user';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { isPlatformBrowser } from '@angular/common';
import { Address } from '../../core/models/address';
import { State } from '../../core/models/state';
import { Country } from '../../core/models/country';

@Injectable()
export class UserService {

  constructor(
    private http: HttpClient,
    private toastrService: ToastrService,
    @Inject(PLATFORM_ID) private platformId: any
  ) { }

  /**
   *
   *
   * @returns {Observable<Order[]>}
   *
   * @memberof UserService
   */
  getOrders(email, page): Observable<Array<Order>> {
    return this.http.get<Array<Order>>(`api/v1/orders/mine?q[s]=id%20desc&page=${page}&per_page=5`)
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
    const user_id = isPlatformBrowser(this.platformId) ? JSON.parse(localStorage.getItem('user')).id : null;
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

  getUserAddresses(): Observable<Array<Address>> {
    return this.http.get<Array<Address>>(`api/v1/addresses`)
  }

  getCountires(): Observable<Array<Country>> {
    return this.http.get<any>(`api/v1/countries`)
  }

  getAllStates(countryId: string): Observable<Array<State>> {
    return this.http.get<Array<State>>(`api/v1/countries/${countryId}/states`)
  }
}

