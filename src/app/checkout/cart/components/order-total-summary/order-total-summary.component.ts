import { getOrderState } from './../../../reducers/selectors';
import { Router } from '@angular/router';
import { CheckoutService } from './../../../../core/services/checkout.service';
import { CheckoutActions } from './../../../actions/checkout.actions';
import { AppState } from './../../../../interfaces';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs/Subscription';
import { Component, OnInit, Input, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-order-total-summary',
  templateUrl: './order-total-summary.component.html',
  styleUrls: ['./order-total-summary.component.scss']
})
export class OrderTotalSummaryComponent implements OnInit, OnDestroy {

  stateSub$: Subscription;
  orderState: string;
  @Input() totalCartValue: number;


  constructor(private store: Store<AppState>,
    private actions: CheckoutActions,
    private checkoutService: CheckoutService,
    private router: Router) {
  this.stateSub$ = this.store.select(getOrderState)
    .subscribe(state => this.orderState = state);
  }

  ngOnInit() {
  }

  placeOrder() {
    if (this.orderState === 'cart') {
      this.checkoutService.changeOrderState()
        .do(() => {
          this.router.navigate(['/checkout', 'address']);
        })
        .subscribe();
    } else {
      this.router.navigate(['/checkout', 'address']);
    }
  }

  ngOnDestroy() {
    this.stateSub$.unsubscribe();
  }
}
