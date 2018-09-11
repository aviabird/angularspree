import { Observable } from 'rxjs/internal/Observable';
import { PaymentMode } from './../models/payment_mode';
import { map, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { getOrderNumber, getOrderId } from './../../checkout/reducers/selectors';
import { CheckoutActions } from './../../checkout/actions/checkout.actions';
import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { LineItem } from './../models/line_item';
import { AppState } from './../../interfaces';
import { Store } from '@ngrx/store';
import { Order } from '../models/order';
import { ToastrService } from 'ngx-toastr';
import { isPlatformBrowser } from '@angular/common';

@Injectable()
export class CheckoutService {
  private orderId: number;
  private orderNumber: string;

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

    this.store.select(getOrderId)
      .subscribe(orderId => (this.orderId = orderId));

    this.store.select(getOrderNumber)
      .subscribe(orderNumber => (this.orderNumber = orderNumber));
  }

  /**
   *
   *
   * @param {number} productId
   * @param {number} quantity
   * @returns {Observable<LineItem>}
   * @memberof CheckoutService
   */
  createNewLineItem(productId: number, quantity: number): Observable<LineItem> {
    const params = this.buildOrderParams(productId, quantity)
    return this.http.post<LineItem>(`api/v1/line_items`, params).pipe(
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
    return this.http.post<Order>('api/v1/orders/current', {}).pipe(
      map(order => {
        this.setOrderTokenInLocalStorage(order.number);
        return this.store.dispatch(
          this.actions.fetchCurrentOrderSuccess(order)
        );
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
  getOrder() {
    const url = `api/v1/orders/${this.orderNumber}`;
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
    return this.http
      .post<Order>('api/v1/orders/blank', {})
      .pipe(
        map(order => {
          this.setOrderTokenInLocalStorage(order.number);
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
   * @param {number} lineItemId
   * @returns
   * @memberof CheckoutService
   */
  deleteLineItem(lineItemId: number) {
    const param = {
      data: { id: lineItemId, type: 'line_item' }
    }

    const url = `api/v1/line_items`
    return this.http.request<{}>('delete', url, { body: param });
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
      this.orderId
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
   * @returns {Observable<Array<PaymentMode>>}
   * @memberof CheckoutService
   */
  availablePaymentMethods(): Observable<Array<PaymentMode>> {
    const url = `api/v1/payment/payment-methods`
    return this.http.get<Array<PaymentMode>>(url);
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
        this.orderId
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
  private setOrderTokenInLocalStorage(orderNumber: string): void {
    const jsonData = JSON.stringify(orderNumber);
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('order_number', jsonData);
    }
  }

  private buildOrderParams(productId: number, quantity: number) {
    const params = {
      'data': {
        'type': 'line_item',
        'attributes': {
          'quantity': quantity
        },
        'relationships': {
          'order': {
            'data': {
              'id': this.orderId,
              'type': 'order'
            }
          },
          'product': {
            'data': {
              'id': productId,
              'type': 'product'
            }
          }
        }
      }
    }
    return params;
  }
}
