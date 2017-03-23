import { CheckoutActions } from './../../actions/checkout.actions';
import { AppState } from './../../../interfaces';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { PaymentMode } from './../../../core/models/payment_mode';
import { Observable } from 'rxjs/Rx';
import { PaymentService } from './../services/payment.service';
import { CheckoutService } from './../../../core/services/checkout.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-payment-modes-list',
  templateUrl: './payment-modes-list.component.html',
  styleUrls: ['./payment-modes-list.component.scss']
})
export class PaymentModesListComponent implements OnInit {

  @Input() paymentAmount: number;
  @Input() orderNumber: number;
  paymentModes: PaymentMode[];
  selectedMode: PaymentMode = new PaymentMode;

  constructor(private checkoutService: CheckoutService,
    private paymentService: PaymentService,
    private router: Router,
    private store: Store<AppState>,
    private checkoutActions: CheckoutActions) {
  }

  ngOnInit() {
    this.fetchAllPayments();
  }

  selectedPaymentMode(mode) {
    this.selectedMode = mode;
  }

  private fetchAllPayments() {
    this.checkoutService.availablePaymentMethods()
      .subscribe((payment) => {
        this.paymentModes = payment.payment_methods;
        this.selectedMode = this.paymentService.setCODAsSelectedMode(this.paymentModes);
      });
  }

  makePayment() {
    const paymentModeId = this.selectedMode.id;
    this.checkoutService.createNewPayment(paymentModeId, this.paymentAmount)
      .do(() => {
        this.store.dispatch(this.checkoutActions.orderCompleteSuccess());
        this.router.navigate(['/user', 'orders', 'detail', this.orderNumber]);
        this.checkoutService.createEmptyOrder()
          .subscribe();
      })
      .subscribe();
  }

}
