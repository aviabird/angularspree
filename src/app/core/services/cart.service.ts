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

  constructor(
    private http: HttpService,
    private actions: CartActions,
    private store: Store<AppState>
  ) {}

  createNewLineItem(variant_id: number): Observable<LineItem> {
    const orderNo = this.store.select(getOrderNumber);
    let number;
    orderNo.subscribe((no) => number = no);
    return this.http.post(
      `spree/api/v1/orders/${number}/line_items?line_item[variant_id]=${variant_id}&line_item[quantity]=1`,
      {}
    ).map(res => {
      console.log('res', res.json());
      return res.json();
    });
  }

  fetchCurrentOrder() {
    return this.http.get(
      'spree/api/v1/orders/current'
    ).map(res => {
      console.log('res', res.json());
      return res.json();
    });
  }

}
