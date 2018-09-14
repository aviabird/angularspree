import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Order } from '../../../core/models/order';
import { map } from 'rxjs/operators';
import { Address } from '../../../core/models/address';
import { User } from '../../../core/models/user';
import { PaymentMode } from '../../../core/models/payment_mode';

@Injectable()
export class PaymentService {
  paymentMethodName = environment.config.defaultPaymentMethod;

  constructor(private http: HttpClient) { }


  /**
   *
   *
   * @param {Array<PaymentMode>} modes
   * @returns {PaymentMode}
   * @memberof PaymentService
   */
  getDefaultSelectedMode(modes: Array<PaymentMode>): PaymentMode {
    let selectedMode;
    modes.forEach((mode) => {
      if (mode.name === this.paymentMethodName) {
        selectedMode = mode;
      }
    });
    return selectedMode;
  }

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
  makeHostedPayment(orderId: number, orderNumber: string, paymentId: number, orderAmount: number, paymentMethodId: number) {
    const params = this.buildHostedPaymentJson(orderId, orderNumber, paymentId, orderAmount, paymentMethodId);
    const url = `api/v1/hosted-payment/payubiz-request`
    return this.http.post(url, params)
      .pipe(
        map(
          res => { return res }
        ),
        error => { return error }
      )
  }


  makeCodPayment(orderId: number) {
    const params = this.buildCodPaymentJson(orderId);
    const url = `api/v1/payment/cod_payment`
    return this.http.post(url, params)
      .pipe(
        map(
          res => { return res }
        ),
        error => { return error }
      )
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
  buildHostedPaymentJson(orderId: number, orderNumber: string, paymentId: number, orderAmount: number, paymentMethodId: number): Object {
    const user: User = JSON.parse(localStorage.getItem('user'));
    const params = {
      'data': {
        'attributes': {
          'order_id': orderId,
          'order_number': orderNumber,
          'payment_id': paymentId,
          'payment_method_id': paymentMethodId,
          'amount': orderAmount.toString(),
          'product_info': 'snitch_products',
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
