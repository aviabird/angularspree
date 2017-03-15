import { Response } from '@angular/http';
import { getOrderNumber } from './../../checkout/cart/reducers/selectors';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { LineItem } from './../models/line_item';
import { AppState } from './../../interfaces';
import { Store } from '@ngrx/store';
import { CartActions } from './../../checkout/cart/actions/cart-actions';
import { HttpService } from './http';
import { environment } from './../../../environments/environment.prod';

@Injectable()
export class CartService {
  private apiLink: string = environment.API_ENDPOINT;
  private orderNumber: number;

  constructor(
    private http: HttpService,
    private actions: CartActions,
    private store: Store<AppState>,
    private cartActions: CartActions
  ) {
      this.store.select(getOrderNumber)
        .subscribe(number => this.orderNumber = number);
    }

//  Change below methods once angular releases RC4, so that this methods can be called from effects
//  Follow this linke to know more about this issue https://github.com/angular/angular/issues/12869

  createNewLineItem(variant_id: number) {
    return this.http.post(
      `spree/api/v1/orders/${this.orderNumber}/line_items?line_item[variant_id]=${variant_id}&line_item[quantity]=1`,
      {}
    ).map(res => {
      const lineItem: LineItem =  res.json();
      this.store.dispatch(this.cartActions.addToCartSuccess(lineItem));
    });
  }

  fetchCurrentOrder() {
    return this.http.get(
      'spree/api/v1/orders/current'
    ).map(res => {
      const order = res.json();
      return this.store.dispatch(this.cartActions.fetchCurrentOrderSuccess(order));
    });
  }

  deleteLineItem(id: number, quantity: number) {
    return this.http.delete(`spree/api/v1/orders/${this.orderNumber}/line_items/${id}`)
      .map(() => {
        this.store.dispatch(this.cartActions.removeLineItemSuccess(id, quantity));
      });
  }

}
