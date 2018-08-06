import { map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { getOrderNumber } from './../../checkout/reducers/selectors';
import { CheckoutActions } from './../../checkout/actions/checkout.actions';
import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { LineItem } from './../models/line_item';
import { AppState } from './../../interfaces';
import { Store } from '@ngrx/store';
import { Order } from '../models/order';
import { ToastrService } from 'ngx-toastr';
import * as CryptoJS from 'crypto-js';
import { environment } from '../../../environments/environment';
import { isPlatformBrowser } from '@angular/common';

@Injectable()
export class CheckoutService {
  private orderNumber: number;

  /**
   * Creates an instance of CheckoutService.
   * @param {HttpService} http
   * @param {CheckoutActions} actions
   * @param {Store<AppState>} store
   *
   * @memberof CheckoutService
   */
  constructor(
    private http: HttpClient,
    private actions: CheckoutActions,
    private store: Store<AppState>,
    private toastyService: ToastrService,
    @Inject(PLATFORM_ID) private platformId: any) {
    this.store.select(getOrderNumber)
      .subscribe(number => (this.orderNumber = number));
  }

  /**
   *
   *
   * @param {number} variant_id
   * @returns
   *
   * @memberof CheckoutService
   */
  createNewLineItem(variant_id: number, quantity: number) {
    const params = {
      line_item: { variant_id: variant_id, quantity: quantity }
    },
      url = `api/v1/orders/${this.orderNumber}/line_items?order_token=${this.getOrderToken()}`;

    return this.http.post<LineItem>(url, params).pipe(
      tap(
        lineItem => {
          this.toastyService.success('Success!', 'Cart updated!');
          return lineItem;
        },
        _ => this.toastyService.error('Something went wrong!', 'Failed')
      )
    );
  }

  /**
   *
   *
   * @returns
   *
   * @memberof CheckoutService
   */
  fetchCurrentOrder() {
    return this.http.get<Order>('api/v1/orders/current').pipe(
      map(order => {
        if (order) {
          const token = order.token;
          this.setOrderTokenInLocalStorage({ order_token: token });
          return this.store.dispatch(
            this.actions.fetchCurrentOrderSuccess(order)
          );
        } else {
          this.createEmptyOrder().subscribe();
        }
      })
    );
  }

  /**
   *
   *
   * @param {string} orderNumber
   * @returns
   * @memberof CheckoutService
   */
  getOrder(orderNumber: string) {
    const url = `api/v1/orders/${orderNumber}.json`;
    return this.http.get<Order>(url);
  }

  /**
   *
   *
   * @returns
   *
   * @memberof CheckoutService
   */
  createEmptyOrder() {
    const headers = new HttpHeaders().set('Content-Type', 'text/plain');

    return this.http
      .post<Order>('api/v1/orders.json', null, { headers: headers })
      .pipe(
        map(order => {
          this.setOrderTokenInLocalStorage({ order_token: order.token });
          return this.store.dispatch(
            this.actions.fetchCurrentOrderSuccess(order)
          );
        }),
        tap(
          _ => _,
          _ =>
            this.toastyService.error('Unable to create empty order', 'ERROR!!')
        )
      );
  }

  /**
   *
   *
   * @param {LineItem} lineItem
   * @returns
   *
   * @memberof CheckoutService
   */
  deleteLineItem(lineItem: LineItem) {
    const url = `api/v1/orders/${this.orderNumber}/line_items/${
      lineItem.id
      }?order_token=${this.getOrderToken()}`;
    return this.http
      .delete(url)
      .pipe(
        map(() =>
          this.store.dispatch(this.actions.removeLineItemSuccess(lineItem))
        )
      );
  }

  /**
   *
   *
   * @returns
   *
   * @memberof CheckoutService
   */
  changeOrderState() {
    const url = `api/v1/checkouts/${
      this.orderNumber
      }/next.json?order_token=${this.getOrderToken()}`;
    return this.http
      .put<Order>(url, {})
      .pipe(
        map(order =>
          this.store.dispatch(this.actions.changeOrderStateSuccess(order))
        )
      );
  }

  /**
   *
   *
   * @param {any} params
   * @returns
   *
   * @memberof CheckoutService
   */
  updateOrder(params: any) {
    const url = `api/v1/checkouts/${
      this.orderNumber
      }.json?order_token=${this.getOrderToken()}`;
    return this.http
      .put<Order>(url, params)
      .pipe(
        map(order =>
          this.store.dispatch(this.actions.updateOrderSuccess(order))
        )
      );
  }

  /**
   *
   *
   * @returns
   *
   * @memberof CheckoutService
   */
  availablePaymentMethods() {
    const url = `api/v1/orders/${
      this.orderNumber
      }/payments/new?order_token=${this.getOrderToken()}`;
    return this.http.get<any>(url);
  }

  /**
   *
   *
   * @param {number} paymentModeId
   * @param {number} paymentAmount
   * @returns
   * @memberof CheckoutService
   */
  createNewPayment(paymentModeId: number, paymentAmount: number) {
    return this.http
      .post(
        `api/v1/orders/${
        this.orderNumber
        }/payments?order_token=${this.getOrderToken()}`,
        {
          payment: {
            payment_method_id: paymentModeId,
            amount: paymentAmount
          }
        }
      )
      .pipe(map(_ => this.changeOrderState().subscribe()));
  }

  makePayment(paymentAmount: number, address: any, orderNumber: string) {
    const payUbizSalt = environment.config.payuBizSalt;
    const payUbizKey = environment.config.payuBizKey;
    const successUrl = `${environment.apiEndpoint}payubiz/handle_payment`;
    const failureUrl = `${environment.apiEndpoint}payubiz/canceled_payment`;

    const hashParams = {
      key: payUbizKey,
      txnid: `${orderNumber}` + `${(Math.random().toString(36).substr(2, 9)).toUpperCase()}`,
      amount: paymentAmount,
      productinfo: `${environment.appName}-Product`,
      firstname: address.firstname,
      email: isPlatformBrowser(this.platformId) ? JSON.parse(localStorage.getItem('user')).email : '',
      udf1: `${orderNumber}`
    }
    // tslint:disable-next-line:max-line-length
    const paramsList = `${hashParams.key}|${hashParams.txnid}|${hashParams.amount}|${hashParams.productinfo}|${hashParams.firstname}|${hashParams.email}|${hashParams.udf1}||||||||||${payUbizSalt}`;
    const encryptedHash = CryptoJS.SHA512(paramsList);
    const hashString = CryptoJS.enc.Hex.stringify(encryptedHash)

    const params = {
      key: hashParams.key,
      txnid: hashParams.txnid,
      amount: hashParams.amount,
      productinfo: hashParams.productinfo,
      firstname: hashParams.firstname,
      email: hashParams.email,
      phone: address.phone,
      udf1: hashParams.udf1,
      surl: successUrl,
      furl: failureUrl,
      hash: hashString,
    }

    return this.http.post(`payubiz/post_request_payubiz`, { params: params })
      .pipe(
        map(res => { return res }), error => { return error }
      )
  }
  /**
   *
   *
   * @private
   * @returns
   *
   * @memberof CheckoutService
   */
  private getOrderToken() {
    const order = isPlatformBrowser(this.platformId) ? JSON.parse(localStorage.getItem('order')) : {};
    const token = order.order_token;
    return token;
  }

  shipmentAvailability(pincode: number) {
    return this.http
      .post(`address/shipment_availability`, { pincode: pincode })
  }
  /**
   *
   *
   * @private
   * @param {any} token
   *
   * @memberof CheckoutService
   */
  private setOrderTokenInLocalStorage(token: any): void {
    const jsonData = JSON.stringify(token);
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('order', jsonData) ;
    }
  }
}
