import { getOrderNumber } from './../../checkout/reducers/selectors';
import { CheckoutActions } from './../../checkout/actions/checkout.actions';
import { Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { LineItem } from './../models/line_item';
import { AppState } from './../../interfaces';
import { Store } from '@ngrx/store';
import { HttpService } from './http';
import { environment } from './../../../environments/environment.prod';

@Injectable()
export class CheckoutService {
  private apiLink: string = environment.API_ENDPOINT;
  private orderNumber: number;

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

  createNewLineItem(variant_id: number) {
    return this.http.post(
      `spree/api/v1/orders/${this.orderNumber}/line_items?line_item[variant_id]=${variant_id}&line_item[quantity]=2`,
      {}
    ).map(res => {
      const lineItem: LineItem =  res.json();
      this.store.dispatch(this.actions.addToCartSuccess(lineItem));
    });
  }

  fetchCurrentOrder() {
    return this.http.get(
      'spree/api/v1/orders/current'
    ).map(res => {
      const order = res.json();
      return this.store.dispatch(this.actions.fetchCurrentOrderSuccess(order));
    });
  }

  deleteLineItem(lineItem: LineItem) {
    return this.http.delete(`spree/api/v1/orders/${this.orderNumber}/line_items/${lineItem.id}`)
      .map(() => {
        this.store.dispatch(this.actions.removeLineItemSuccess(lineItem));
      });
  }

  changeOrderState() {
    return this.http.put(
      `spree/api/v1/checkouts/${this.orderNumber}/next.json`,
      {}
    ).map((res) => {
      console.log('response', res.json());
      // this.store.dispatch(this.actions.changeOrderState());
    });
  }

  updateOrder(params) {
    return this.http.put(
      `spree/api/v1/checkouts/${this.orderNumber}.json`,
      params
    ).map((res) => {
      const order = res.json();
      console.log('response', res.json());
      this.store.dispatch(this.actions.updateOrderSuccess(order));
    });
  }


}
