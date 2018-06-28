
import { tap } from 'rxjs/operators';
import { getOrderState } from './../../../reducers/selectors';
import { Router } from '@angular/router';
import { CheckoutService } from './../../../../core/services/checkout.service';
import { CheckoutActions } from './../../../actions/checkout.actions';
import { AppState } from './../../../../interfaces';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { Component, OnInit, Input, OnDestroy, OnChanges } from '@angular/core';

@Component({
  selector: 'app-order-total-summary',
  templateUrl: './order-total-summary.component.html',
  styleUrls: ['./order-total-summary.component.scss']
})
export class OrderTotalSummaryComponent implements OnInit, OnDestroy, OnChanges {

  stateSub$: Subscription;
  orderState: string;
  @Input() totalCartValue: number;
  @Input() isMobile;
  enableshipping: boolean;
  enableshippingvalue;
  shippingProgress;
  constructor(private store: Store<AppState>,
    private actions: CheckoutActions,
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
    if (this.totalCartValue !== 0) {
      this.enableshippingvalue = 699 - this.totalCartValue;
      if (this.totalCartValue < 699) {
        this.enableshipping = true;
        this.shippingProgress = (this.totalCartValue / 699) * 100;
        console.log('Aftervalue', this.shippingProgress);
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
