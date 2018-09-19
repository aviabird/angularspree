import { getAuthStatus } from './../../../auth/reducers/selectors';
import { AppState } from './../../../interfaces';
import { Store } from '@ngrx/store';
import { PaymentMode } from './../../../core/models/payment_mode';
import { CheckoutService } from './../../../core/services/checkout.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { getIsPaymentAdded } from '../../reducers/selectors';
import { Payment } from '../../../core/models/payment';
import { Subscription } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-payment-modes-list',
  templateUrl: './payment-modes-list.component.html',
  styleUrls: ['./payment-modes-list.component.scss']
})
export class PaymentModesListComponent implements OnInit, OnDestroy {
  paymentMethodId: number;
  payment: Payment;
  showDummyCardInfo = environment.config.showDummyCardInfo;
  paymentModes: PaymentMode[];
  selectedMode: PaymentMode = new PaymentMode;
  isAuthenticated: boolean;
  showOrderSuccess = false;
  freeShippingAmount = environment.config.freeShippingAmount;
  currency = environment.config.currency_symbol;
  subscriptionList$: Array<Subscription> = [];
  isPaymentAdded: boolean;

  constructor(private checkoutService: CheckoutService,
    private store: Store<AppState>,
    private toastyService: ToastrService) { }

  ngOnInit() {
    this.fetchAllPayments();
    this.subscriptionList$.push(
      this.store.select(getAuthStatus).subscribe((auth) => {
        this.isAuthenticated = auth;
      }),
      this.store.select(getIsPaymentAdded).
        subscribe(paymentStaus => this.isPaymentAdded = paymentStaus)
    );
  }

  selectedPaymentMode(mode) {
    if (this.isPaymentAdded) {
      this.toastyService.info('You have already confirmed payment mode for this order.', 'Info!');
    } else {
      this.selectedMode = mode;
    }
  }

  private fetchAllPayments() {
    this.subscriptionList$.push(
      this.checkoutService.availablePaymentMethods()
        .subscribe((payments) => {
          this.paymentModes = payments;
          if (this.paymentModes.length > 0) {
            this.selectedMode = this.paymentModes[0];
          }
        })
    )
  }

  ngOnDestroy() {
    this.subscriptionList$.forEach(sub$ => sub$.unsubscribe());
  }
}
