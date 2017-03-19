import { Injectable } from '@angular/core';
import { HttpService } from '../../core/services/http';
import { UserActions } from '../actions/user.actions';
import { Store } from '@ngrx/store';
import { AppState } from '../../interfaces';
import { Observable } from 'rxjs/Rx';
import { Order } from '../../core/models/order';
import { Response } from '@angular/http';

@Injectable()
export class UserService {

  constructor(
    private http: HttpService,
    private actions: UserActions,
    private store: Store<AppState>
  ) { }

  /**
   * Performs a request with `get` http method.
   * @returns Observable<Order[]>
   */
  getOrders(): Observable<Order[]> {
    return this.http.get('/api/orders')
      .map((res: Response) => res.json());
  }

}
