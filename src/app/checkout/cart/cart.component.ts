import { getTotalCartValue, getTotalCartItems, getItemTotal, getOrderNumber } from './../reducers/selectors';
import { Observable } from 'rxjs';
import { AppState } from './../../interfaces';
import { Store } from '@ngrx/store';
import { Component, OnInit, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  screenwidth: number;
  isMobile;
  totalCartValue$: Observable<number>;
  totalCartItems$: Observable<number>;
  shipTotal$: Observable<number>;
  itemTotal$: Observable<number>;
  orderNumber: string;

  constructor(private store: Store<AppState>,
    @Inject(PLATFORM_ID) private platformId: Object) {
  }

  ngOnInit() {
    this.store.select(getOrderNumber).subscribe(number => {
      if (number !== null) {
        this.totalCartValue$ = this.store.select(getTotalCartValue);
        this.totalCartItems$ = this.store.select(getTotalCartItems);
        this.itemTotal$ = this.store.select(getItemTotal);
      }
    });

    if (isPlatformBrowser(this.platformId)) {
      this.screenwidth = window.innerWidth;
    }
    this.calculateInnerWidth();
  }
  calculateInnerWidth() {
    if (this.screenwidth <= 1000) {
      this.isMobile = this.screenwidth;
    }
  }
}
