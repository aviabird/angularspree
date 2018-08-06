
import { tap } from 'rxjs/operators';
import { getAuthStatus } from './../../../auth/reducers/selectors';
import { CheckoutActions } from './../../actions/checkout.actions';
import { AppState } from './../../../interfaces';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { PaymentMode } from './../../../core/models/payment_mode';
import { PaymentService } from './../services/payment.service';
import { CheckoutService } from './../../../core/services/checkout.service';
import { Component, OnInit, Input, PLATFORM_ID, Inject } from '@angular/core';
import { Address } from '../../../core/models/address';
import { environment } from '../../../../environments/environment';
import { ToastrService } from 'ngx-toastr';
import { isPlatformBrowser } from '../../../../../node_modules/@angular/common';

@Component({
  selector: 'app-payment-modes-list',
  templateUrl: './payment-modes-list.component.html',
  styleUrls: ['./payment-modes-list.component.scss']
})
export class PaymentModesListComponent implements OnInit {

  @Input() paymentAmount: number;
  @Input() orderNumber: string;
  @Input() address: Address;
  isShippeble: boolean;
  showDummyCardInfo = environment.config.showDummyCardInfo;

  paymentModes: PaymentMode[];
  selectedMode: PaymentMode = new PaymentMode;
  isAuthenticated: boolean;
  showOrderSuccess = false;
  freeShippingAmount = environment.config.freeShippingAmount;
  currency = environment.config.currency_symbol;
  payubiz = environment.config.PaymentMethodPayubiz;
  cashOnDelivery = environment.config.PaymentMethodCod;

  constructor(private checkoutService: CheckoutService,
    private paymentService: PaymentService,
    private router: Router,
    private store: Store<AppState>,
    private checkoutActions: CheckoutActions,
    private toastyService: ToastrService,
    @Inject(PLATFORM_ID) private platformId: any) {
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
        this.selectedMode = this.paymentService.getDefaultSelectedMode(this.paymentModes);
      });
  }

  makePaymentCod() {
    const paymentModeId = this.selectedMode.id;
    const shipping_pincode = (this.address.zipcode)
    this.checkoutService.shipmentAvailability(+shipping_pincode)
      .subscribe((res: any) => {
        this.isShippeble = res.available
        if (this.isShippeble && this.paymentAmount >= this.freeShippingAmount) {
          this.checkoutService.createNewPayment(paymentModeId, this.paymentAmount).pipe(
            tap(() => {
              this.store.dispatch(this.checkoutActions.orderCompleteSuccess());
              this.redirectToNewPage();
              this.checkoutService.createEmptyOrder()
                .subscribe();
            }))
            .subscribe();
        } else {
          if (this.paymentAmount < this.freeShippingAmount) {
            // tslint:disable-next-line:max-line-length
            this.toastyService.error(`${this.selectedMode.name} is not available for Order amount less than ${this.currency} ${this.freeShippingAmount}.`, 'Order Amount');
          } else if (!this.isShippeble) {
            this.toastyService.error(`${this.selectedMode.name} is not available for pincode ${shipping_pincode}.`, 'Pincode');
          }
        }
      });
  }

  makePaymentPayubiz() {
    this.checkoutService.makePayment(this.paymentAmount, this.address, this.orderNumber)
      .subscribe((response: any) => {
        response = response
        this.checkoutService.createNewPayment(this.selectedMode.id, this.paymentAmount).pipe(
          tap(() => {
            this.store.dispatch(this.checkoutActions.orderCompleteSuccess());
            this.checkoutService.createEmptyOrder()
              .subscribe();
          })
        )
          .subscribe((res) => {
            if (isPlatformBrowser(this.platformId)) {
              window.open(response.url, '_self');
            }
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
