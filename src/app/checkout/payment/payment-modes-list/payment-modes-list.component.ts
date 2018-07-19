
import { tap } from 'rxjs/operators';
import { getAuthStatus } from './../../../auth/reducers/selectors';
import { CheckoutActions } from './../../actions/checkout.actions';
import { AppState } from './../../../interfaces';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { PaymentMode } from './../../../core/models/payment_mode';
import { PaymentService } from './../services/payment.service';
import { CheckoutService } from './../../../core/services/checkout.service';
import { Component, OnInit, Input } from '@angular/core';
import { Address } from '../../../core/models/address';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-payment-modes-list',
  templateUrl: './payment-modes-list.component.html',
  styleUrls: ['./payment-modes-list.component.scss']
})
export class PaymentModesListComponent implements OnInit {

  @Input() paymentAmount: number;
  @Input() orderNumber: number;
  @Input() address: Address;

  paymentModes: PaymentMode[];
  selectedMode: PaymentMode = new PaymentMode;
  isAuthenticated: boolean;
  showOrderSuccess = false;
  free_shipping_order_amount = environment.config.free_shipping_order_amount

  constructor(private checkoutService: CheckoutService,
    private paymentService: PaymentService,
    private router: Router,
    private store: Store<AppState>,
    private checkoutActions: CheckoutActions) {
    this.store.select(getAuthStatus).subscribe((auth) => {
      this.isAuthenticated = auth;
    });
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

  makePaymentCod() {
    const paymentModeId = this.selectedMode.id;
    const shipping_pincode = this.address.zipcode
    
    this.checkoutService.createNewPayment(paymentModeId, this.paymentAmount).pipe(
      tap(() => {
        this.store.dispatch(this.checkoutActions.orderCompleteSuccess());
        this.redirectToNewPage();
        this.checkoutService.createEmptyOrder()
          .subscribe();
      }))
      .subscribe();
  }

  makePaymentPayubiz() {
    this.checkoutService.makePayment(this.paymentAmount, this.address)
      .subscribe(response => {
        response = response
        this.checkoutService.createNewPayment(this.selectedMode.id, this.paymentAmount).pipe(
          tap(() => {
            this.store.dispatch(this.checkoutActions.orderCompleteSuccess());
            this.checkoutService.createEmptyOrder()
              .subscribe();
          })
        )
          .subscribe(res => {
            window.open(response.url, '_self');
          });
      })
  }

  private redirectToNewPage() {
    if (this.isAuthenticated) {
      this.router.navigate(['checkout', 'order-success'],
        { queryParams: { orderReferance: this.orderNumber } });
    } else {
      this.router.navigate(['/']);
    }
  }
}
