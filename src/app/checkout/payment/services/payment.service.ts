import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Order } from '../../../core/models/order';
import { map } from 'rxjs/operators';
import { Address } from '../../../core/models/address';
import { User } from '../../../core/models/user';

@Injectable()
export class PaymentService {
  paymentMethodName = environment.config.defaultPaymentMethod;

  constructor(private http: HttpClient) { }


  getDefaultSelectedMode(modes) {
    let selectedMode;
    modes.forEach((mode) => {
      if (mode.name === this.paymentMethodName) {
        selectedMode = mode;
      }
    });
    return selectedMode;
  }


  addPaymentToOrder(paymentMethodId: number, orderId: number, orderAmount: number) {
    const amount = orderAmount.toString()
    const params = this.buildAddPaymentJson(paymentMethodId, orderId, amount);
    const url = `http://localhost:3000/api/v1/orders/${orderId}/add-payment`;
    return this.http.post<any>(url, params).pipe(
      map(order => {
        return order;
      })
    );
  }

  makeHostedPayment(orderId: number, paymentId: number, orderAmount: number, paymentMethodId: number) {
    const params = this.buildHostedPaymentJson(orderId, paymentId, orderAmount, paymentMethodId);
    const url = `http://localhost:3000/api/v1/hosted-payment/payubiz-request`
    return this.http.post(url, params)
      .pipe(
        map(res => { return res }), error => { return error }
      )
  }

  buildHostedPaymentJson(orderId, paymentId, orderAmount, paymentMethodId) {
    const user: User = JSON.parse(localStorage.getItem('user'));
    const params = {
      'data': {
        'attributes': {
          'order_id': orderId,
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

  buildAddPaymentJson(paymentMethodId, orderId, orderAmount) {
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
}
