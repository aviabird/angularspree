import { Component, OnInit, Input, OnChanges, OnDestroy } from '@angular/core';
import { environment } from '../../../../../environments/environment';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../interfaces';
import { getAuthStatus } from '../../../../auth/reducers/selectors';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-order-total-summary',
  templateUrl: './order-total-summary.component.html',
  styleUrls: ['./order-total-summary.component.scss']
})
export class OrderTotalSummaryComponent implements OnInit, OnChanges, OnDestroy {
  orderState: string;
  @Input() itemTotal: number;
  @Input() isMobile;
  enableshipping: boolean;
  enableshippingvalue;
  shippingProgress;
  currency = environment.config.currency_symbol;
  freeShippingAmount = environment.config.freeShippingAmount;
  isAuthenticated: boolean;
  subscriptionList$: Array<Subscription> = [];

  constructor(
    private router: Router,
    private store: Store<AppState>) { }

  ngOnInit() {
    this.subscriptionList$.push(
      this.store.select(getAuthStatus).
        subscribe(authStatus => {
          this.isAuthenticated = authStatus
        })
    );
  }

  ngOnChanges() {
    this.enableshippingcalculate()
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

  placeOrder() {
    if (this.isAuthenticated) {
      this.router.navigate(['/checkout', 'address']);
    } else {
      this.router.navigate(['/auth', 'login']);
    }
  }

  ngOnDestroy() {
    this.subscriptionList$.forEach(sub$ => sub$.unsubscribe());
  }
}
