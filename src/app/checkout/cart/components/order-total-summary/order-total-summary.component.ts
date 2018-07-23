
import { tap } from 'rxjs/operators';
import { getOrderState } from './../../../reducers/selectors';
import { Router } from '@angular/router';
import { CheckoutService } from './../../../../core/services/checkout.service';
import { AppState } from './../../../../interfaces';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { Component, OnInit, Input, OnDestroy, OnChanges } from '@angular/core';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'app-order-total-summary',
  templateUrl: './order-total-summary.component.html',
  styleUrls: ['./order-total-summary.component.scss']
})
export class OrderTotalSummaryComponent implements OnInit, OnDestroy, OnChanges {

  stateSub$: Subscription;
  orderState: string;
  @Input() itemTotal: number;
  @Input() isMobile;
  enableshipping: boolean;
  enableshippingvalue;
  shippingProgress;
  currency = environment.config.currency_symbol;
  freeShippingAmount = environment.config.freeShippingAmount;

  constructor(private store: Store<AppState>,
    private checkoutService: CheckoutService,
    private router: Router) {
    this.stateSub$ = this.store.select(getOrderState)
      .subscribe(state => this.orderState = state);
  }

  ngOnInit() {

  }

  ngOnChanges() {
    this.enableshippingcalculate()
  }

  placeOrder() {
    if (this.orderState === 'cart') {
      this.checkoutService.changeOrderState().pipe(
        tap(() => {
          this.router.navigate(['/checkout', 'address']);
        }))
        .subscribe();
    } else {
      this.router.navigate(['/checkout', 'address']);
    }
  }

  enableshippingcalculate() {
    if (this.itemTotal !== 0) {
      this.enableshippingvalue = this.freeShippingAmount - this.itemTotal;
      if (this.itemTotal < this.freeShippingAmount) {
        this.enableshipping = true;
        this.shippingProgress = (this.itemTotal / this.freeShippingAmount) * 100;
      } else {
        this.enableshipping = false;
        this.shippingProgress = 100;
      }

    }

  }
  ngOnDestroy() {
    this.stateSub$.unsubscribe();
  }
}
