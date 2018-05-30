import { ToastyService } from 'ng2-toasty';
import { Payment } from './../models/payment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { getOrderNumber } from './../../checkout/reducers/selectors';
import { CheckoutActions } from './../../checkout/actions/checkout.actions';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { LineItem } from './../models/line_item';
import { AppState } from './../../interfaces';
import { Store } from '@ngrx/store';
import { Order } from '../models/order';

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
    private toastyService: ToastyService
  ) {
    this.store.select(getOrderNumber)
      .subscribe(number => this.orderNumber = number);
  }

  //  Change below methods once angular releases RC4, so that this methods can be called from effects
  //  Follow this linke to know more about this issue https://github.com/angular/angular/issues/12869

  /**
   *
   *
   * @param {number} variant_id
   * @returns
   *
   * @memberof CheckoutService
   */
  createNewLineItem(variant_id: number) {
    const
      params = { line_item: { variant_id, quantity: 1 } },
      url = `api/v1/orders/${this.orderNumber}/line_items?order_token=${this.getOrderToken()}`;

    return this.http.post<LineItem>(url, params);
  }

  /**
   *
   *
   * @returns
   *
   * @memberof CheckoutService
   */
  fetchCurrentOrder() {
    return (
      this.http
        .get<Order>('api/v1/orders/current')
        .map(order => {
          if (order) {
            const token = order.token;
            this.setOrderTokenInLocalStorage({ order_token: token });
            return this.store.dispatch(this.actions.fetchCurrentOrderSuccess(order));
          } else {
            this.createEmptyOrder()
              .subscribe();
          }
        })
    )
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
    const user = JSON.parse(localStorage.getItem('user'));
    const headers = new HttpHeaders({
      'Content-Type': 'text/plain',
      'X-Spree-Token': user && user.spree_api_key
    });

    return (
      this.http
        .post<Order>('api/v1/orders.json', { headers })
        .map(order => {
          this.setOrderTokenInLocalStorage({ order_token: order.token });
          return this.store.dispatch(this.actions.fetchCurrentOrderSuccess(order));
        })
        .do(
        _ => _,
        _ => this.toastyService.error({ title: 'ERROR!!', msg: 'Unable to create empty order' })
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
    const url = `api/v1/orders/${this.orderNumber}/line_items/${lineItem.id}?order_token=${this.getOrderToken()}`;
    return (
      this.http
        .delete(url)
        .map(() => this.store.dispatch(this.actions.removeLineItemSuccess(lineItem))));
  }

  /**
   *
   *
   * @returns
   *
   * @memberof CheckoutService
   */
  changeOrderState() {
    const url = `api/v1/checkouts/${this.orderNumber}/next.json?order_token=${this.getOrderToken()}`;
    return (
      this.http
        .put<Order>(url, {})
        .map(order => this.store.dispatch(this.actions.changeOrderStateSuccess(order)))
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
    const url = `api/v1/checkouts/${this.orderNumber}.json?order_token=${this.getOrderToken()}`;
    return (
      this.http
        .put<Order>(url, params)
        .map(order => this.store.dispatch(this.actions.updateOrderSuccess(order)))
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
    const url = `api/v1/orders/${this.orderNumber}/payments/new?order_token=${this.getOrderToken()}`;
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
    return this.http.post(
      `api/v1/orders/${this.orderNumber}/payments?order_token=${this.getOrderToken()}`,
      {
        payment: {
          payment_method_id: paymentModeId,
          amount: paymentAmount
        }
      }
    ).map(_ => this.changeOrderState().subscribe());
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
    const order = JSON.parse(localStorage.getItem('order'));
    const token = order.order_token;
    return token;
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
    localStorage.setItem('order', jsonData);
  }
}
