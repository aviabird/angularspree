import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Order } from '../../../core/models/order';
import { map } from 'rxjs/operators';
import { User } from '../../../core/models/user';

@Injectable()
export class PaymentService {
  constructor(private http: HttpClient) { }

  /**
   *
   *
   * @param {number} paymentMethodId
   * @param {number} orderId
   * @param {number} orderAmount
   * @returns {Observable<Order>}
   * @memberof PaymentService
   */
  addPaymentToOrder(paymentMethodId: number, orderId: number, orderAmount: number): Observable<Order> {
    const amount = orderAmount.toString()
    const params = this.buildAddPaymentJson(paymentMethodId, orderId, amount);
    const url = `api/v1/orders/${orderId}/add-payment`;
    return this.http.post<Order>(url, params);
  }

  /**
   *
   *
   * @param {string} orderNumber
   * @param {number} paymentId
   * @param {number} orderAmount
   * @param {number} paymentMethodId
   * @returns
   * @memberof PaymentService
   */
  makeHostedPayment(orderId: number, orderNumber: string, paymentId: string, orderAmount: number, paymentMethodId: number) {
    const params = this.buildHostedPaymentJson(orderId, orderNumber, paymentId, orderAmount, paymentMethodId);
    const url = `api/v1/hosted-payment/payubiz-request`
    return this.http.post(url, params)
      .pipe(map(res => { return res }, error => { return error }))
  }

  makeCodPayment(orderId: number): Observable<Order> {
    const params = this.buildCodPaymentJson(orderId);
    const url = `api/v1/payment/cod_payment`
    return this.http.post<Order>(url, params);
  }

  makeStripePayment(cardToken: any, orderNumber: string, paymentId: string, orderAmount: number, paymentMethodId: number,
    orderId: number): Observable<Order> {
    const params = this.buildHostedStripePaymentJosn(orderId, orderNumber, paymentId, orderAmount, paymentMethodId, cardToken)
    const url = `api/v1/hosted-payment/stripe-pay`;
    return this.http.post<Order>(url, params);
  }

  getStripeKey(paymentMethodId: number) {
    return this.http.get(`api/v1/hosted-payment/stripe-request?id=${paymentMethodId}`);
  }

  buildHostedStripePaymentJosn(orderId: number, orderNumber: string,
    paymentId: string, orderAmount: number,
    paymentMethodId: number, cardToken: any) {
    const user: User = JSON.parse(localStorage.getItem('user'));
    const params = {
      'data': {
        'attributes': {
          'token': cardToken.id,
          'order_id': orderId,
          'order_number': orderNumber,
          'payment_id': paymentId,
          'payment_method_id': paymentMethodId,
          'amount': orderAmount.toString(),
          'product_info': 'aviacommerce_products',
          'first_name': user.first_name,
          'email': user.email,
          'address': {
            'street1': '123 Main',
            'street2': 'Suite 100',
            'city': 'New York',
            'region': 'NY',
            'country': 'US',
            'postal_code': '11111'
          }
        }
      }
    }

    return params;
  }
  /**
   *
   *
   * @param {string} orderNumber
   * @param {number} paymentId
   * @param {number} orderAmount
   * @param {number} paymentMethodId
   * @returns {Object}
   * @memberof PaymentService
   */
  buildHostedPaymentJson(orderId: number, orderNumber: string, paymentId: string, orderAmount: number, paymentMethodId: number): Object {
    const user: User = JSON.parse(localStorage.getItem('user'));
    const params = {
      'data': {
        'attributes': {
          'order_id': orderId,
          'order_number': orderNumber,
          'payment_id': paymentId,
          'payment_method_id': paymentMethodId,
          'amount': orderAmount.toString(),
          'product_info': 'aviacommerce_products',
          'first_name': user.first_name,
          'email': user.email
        }
      }
    }
    return params;
  }

  /**
   *
   *
   * @param {number} paymentMethodId
   * @param {number} orderId
   * @param {string} orderAmount
   * @returns {Object}
   * @memberof PaymentService
   */
  buildAddPaymentJson(paymentMethodId: number, orderId: number, orderAmount: string): Object {
    const params = {
      'data': {
        'type': 'orders',
        'attributes': {
          'id': orderId,
          'amount': orderAmount,
          'payment_method_id': paymentMethodId
        }
      }
    }
    return params;
  }

  /**
   *
   *
   * @param {number} orderId
   * @returns
   * @memberof PaymentService
   */
  buildCodPaymentJson(orderId: number) {
    const params = {
      'data': {
        'type': 'orders',
        'attributes': {
          'order_id': orderId
        }
      }
    }
    return params;
  }
}
