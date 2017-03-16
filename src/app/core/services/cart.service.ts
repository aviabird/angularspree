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

  createNewLineItem(variant_id: number): Observable<LineItem> {
    return this.http.post(
      `spree/api/v1/orders/${this.orderNumber}/line_items?line_item[variant_id]=${variant_id}&line_item[quantity]=1`,
      {}
    ).map(res => {
      return res.json();
    });
  }

  fetchCurrentOrder() {
    return this.http.get(
      'spree/api/v1/orders/current'
    ).map(res => {
      return res.json();
    });
  }

  deleteLineItem(id: number, quantity: number) {
    return this.http.delete(`spree/api/v1/orders/${this.orderNumber}/line_items/${id}`)
      .subscribe(() => {
        return this.store.dispatch(this.cartActions.removeLineItemSuccess(id, quantity));
      });
  }

}
