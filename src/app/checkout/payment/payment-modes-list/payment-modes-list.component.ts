
import { getAuthStatus } from './../../../auth/reducers/selectors';
import { CheckoutActions } from './../../actions/checkout.actions';
import { AppState } from './../../../interfaces';
import { Store } from '@ngrx/store';
import { PaymentMode } from './../../../core/models/payment_mode';
import { PaymentService } from './../services/payment.service';
import { CheckoutService } from './../../../core/services/checkout.service';
import { Component, OnInit, Input, PLATFORM_ID, Inject, OnDestroy } from '@angular/core';
import { Address } from '../../../core/models/address';
import { environment } from '../../../../environments/environment';
import { isPlatformBrowser } from '@angular/common';
import { getOrderId, getTotalCartValue, getPaymentEntities } from '../../reducers/selectors';
import { Payment } from '../../../core/models/payment';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-payment-modes-list',
  templateUrl: './payment-modes-list.component.html',
  styleUrls: ['./payment-modes-list.component.scss']
})
export class PaymentModesListComponent implements OnInit, OnDestroy {

  @Input() paymentAmount: number;
  @Input() orderNumber: string;
  @Input() address: Address;
  paymentMethodId: number;
  isShippeble: boolean;
  payment: Payment;
  showDummyCardInfo = environment.config.showDummyCardInfo;

  paymentModes: PaymentMode[];
  selectedMode: PaymentMode = new PaymentMode;
  isAuthenticated: boolean;
  showOrderSuccess = false;
  freeShippingAmount = environment.config.freeShippingAmount;
  currency = environment.config.currency_symbol;
  payubiz = environment.config.PaymentMethodPayubiz;
  cashOnDelivery = environment.config.PaymentMethodCod;
  orderId: number;
  orderAmount: number;
  subscriptionList$: Array<Subscription> = [];

  constructor(private checkoutService: CheckoutService,
    private paymentService: PaymentService,
    private store: Store<AppState>,
    private checkoutActions: CheckoutActions,
    @Inject(PLATFORM_ID) private platformId: any) {

    this.subscriptionList$.push(
      this.store.select(getAuthStatus).subscribe((auth) => {
        this.isAuthenticated = auth;
      })
    );
  }

  ngOnInit() {
    this.fetchAllPayments();
    this.subscriptionList$.push(
      this.store.select(getOrderId).subscribe(resOrderId => this.orderId = resOrderId),
      this.store.select(getTotalCartValue).subscribe(resOrderAmt => this.orderAmount = resOrderAmt)
    );
  }

  selectedPaymentMode(mode) {
    this.selectedMode = mode;

  }

  private fetchAllPayments() {
    this.subscriptionList$.push(
      this.checkoutService.availablePaymentMethods()
        .subscribe((payments) => {
          this.paymentModes = payments;
          this.selectedMode = this.paymentService.getDefaultSelectedMode(this.paymentModes);
        })
    )
  }

  makePaymentPayubiz() {
    this.subscriptionList$.push(
      this.store.select(getPaymentEntities).subscribe(data => {
        this.payment = data[this.paymentMethodId]
      })
    );

    this.subscriptionList$.push(
      this.paymentService.makeHostedPayment(
        this.orderId, this.payment.id, this.orderAmount, this.paymentMethodId).
        subscribe((resp: any) => {
          if (isPlatformBrowser(this.platformId)) {
            window.open(resp.url, '_self');
          }
        })
    );
  }

  addPayment(selectedPaymentMethodId: number) {
    this.paymentMethodId = selectedPaymentMethodId;
    this.store.dispatch(this.checkoutActions.bindPayment(this.paymentMethodId, this.orderId, this.orderAmount))
  }

  ngOnDestroy() {
    this.subscriptionList$.forEach(sub$ => sub$.unsubscribe());
  }
}
