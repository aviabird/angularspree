import { getTotalCartValue, getTotalCartItems, getItemTotal } from './../reducers/selectors';
import { Observable } from 'rxjs';
import { AppState } from './../../interfaces';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  screenwidth;
  isMobile;
  totalCartValue$: Observable<number>;
  totalCartItems$: Observable<number>;
  shipTotal$: Observable<number>;
  itemTotal$: Observable<number>;

  constructor(private store: Store<AppState>) {
    this.totalCartValue$ = this.store.select(getTotalCartValue);
    this.totalCartItems$ = this.store.select(getTotalCartItems);
    this.itemTotal$ = this.store.select(getItemTotal);
  }

  ngOnInit() {
    this.screenwidth = window.innerWidth;
    this.calculateInnerWidth();
  }
  calculateInnerWidth() {
    if (this.screenwidth <= 1000) {
      this.isMobile = this.screenwidth;
    }
  }


}
