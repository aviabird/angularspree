import { getOrderNumber } from './../../checkout/reducers/selectors';
import { CheckoutActions } from './../../checkout/actions/checkout.actions';
import { Response, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { LineItem } from './../models/line_item';
import { AppState } from './../../interfaces';
import { Store } from '@ngrx/store';
import { HttpService } from './http';

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
    private http: HttpService,
    private actions: CheckoutActions,
    private store: Store<AppState>,
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
    return this.http.post(
      `spree/api/v1/orders/${this.orderNumber}/line_items?order_token=${this.getOrderToken()}`,
      {
        line_item: {
          variant_id: variant_id,
          quantity: 1
        }
      }
    ).map(res => {
      const lineItem: LineItem =  res.json();
      return lineItem;
    });
  }

  /**
   *
   *
   * @returns
   *
   * @memberof CheckoutService
   */
  fetchCurrentOrder() {
    return this.http.get(
      'spree/api/v1/orders/current'
    ).map(res => {
      const order = res.json();
      if (order) {
        const token = order.token;
        this.setOrderTokenInLocalStorage({order_token: token});
        return this.store.dispatch(this.actions.fetchCurrentOrderSuccess(order));
      } else {
        this.createEmptyOrder()
          .subscribe();
      }
    });
  }

  /**
   *
   *
   * @param {any} orderNumber
   * @returns
   *
   * @memberof CheckoutService
   */
  getOrder(orderNumber) {
    return this.http.get(
      `spree/api/v1/orders/${orderNumber}.json`
    ).map(res => {
      const order = res.json();
      return order;
    });
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
    const headers = new Headers({
      'Content-Type': 'text/plain',
      'X-Spree-Token': user && user.spree_api_key
    });

    return this.http.post(
      'spree/api/v1/orders.json', {}, { headers: headers }
    ).map(res => {
      const order = res.json();
      const token = order.token;
      this.setOrderTokenInLocalStorage({order_token: token});
      return this.store.dispatch(this.actions.fetchCurrentOrderSuccess(order));
    });
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
    return this.http.delete(`spree/api/v1/orders/${this.orderNumber}/line_items/${lineItem.id}?order_token=${this.getOrderToken()}`)
      .map(() => {
        this.store.dispatch(this.actions.removeLineItemSuccess(lineItem));
      });
  }

  /**
   *
   *
   * @returns
   *
   * @memberof CheckoutService
   */
  changeOrderState() {
    return this.http.put(
      `spree/api/v1/checkouts/${this.orderNumber}/next.json?order_token=${this.getOrderToken()}`,
      {}
    ).map((res) => {
      const order = res.json();
      this.store.dispatch(this.actions.changeOrderStateSuccess(order));
    });
  }

  /**
   *
   *
   * @param {any} params
   * @returns
   *
   * @memberof CheckoutService
   */
  updateOrder(params) {
    return this.http.put(
      `spree/api/v1/checkouts/${this.orderNumber}.json?order_token=${this.getOrderToken()}`,
      params
    ).map((res) => {
      const order = res.json();
      this.store.dispatch(this.actions.updateOrderSuccess(order));
    });
  }

  /**
   *
   *
   * @returns
   *
   * @memberof CheckoutService
   */
  availablePaymentMethods() {
    return this.http.get(
      `spree/api/v1/orders/${this.orderNumber}/payments/new?order_token=${this.getOrderToken()}`
    ).map((res) => {
      const payments = res.json();
      return payments;
    });
  }

  /**
   *
   *
   * @param {any} paymentModeId
   * @param {any} paymentAmount
   * @returns
   *
   * @memberof CheckoutService
   */
  createNewPayment(paymentModeId, paymentAmount) {
    return this.http.post(
      `spree/api/v1/orders/${this.orderNumber}/payments?order_token=${this.getOrderToken()}`,
      {
        payment: {
          payment_method_id: paymentModeId,
          amount: paymentAmount
        }
      }
    ).map((res) => {
      this.changeOrderState()
        .subscribe();
    });
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
  private setOrderTokenInLocalStorage(token): void {
    const jsonData = JSON.stringify(token);
    localStorage.setItem('order', jsonData);
  }
}
