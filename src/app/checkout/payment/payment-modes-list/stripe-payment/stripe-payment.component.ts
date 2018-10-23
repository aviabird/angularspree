import { Component, OnInit, Output, EventEmitter, Input, OnDestroy, HostListener } from '@angular/core';
import { PaymentService } from '../../services/payment.service';
import { environment } from '../../../../../environments/environment';
import { Subscription } from 'rxjs';
import { Payment } from '../../../../core/models/payment';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../interfaces';
import { getOrderId, getTotalCartValue, getOrderNumber, getIsPaymentAdded, getPaymentEntities } from '../../../reducers/selectors';
import { CheckoutActions } from '../../../actions/checkout.actions';
import { StripeKey } from '../../../../core/models/stripe';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stripe-payment',
  templateUrl: './stripe-payment.component.html',
  styleUrls: ['./stripe-payment.component.scss']
})
export class StripePaymentComponent implements OnInit, OnDestroy {
  @Input() paymentMethodId: number;
  subscriptionList$: Array<Subscription> = [];
  isPaymentAdded: boolean;
  orderId: number;
  orderAmount: number;
  payment: Payment;
  orderNumber: string;
  handler: any;

  constructor(
    private paymentService: PaymentService,
    private store: Store<AppState>,
    private checkoutActions: CheckoutActions,
    private router: Router
  ) { }

  ngOnInit() {
    this.subscriptionList$.push(
      this.store.select(getOrderId).subscribe(resOrderId => this.orderId = resOrderId),
      this.store.select(getTotalCartValue).subscribe(resOrderAmt => this.orderAmount = resOrderAmt),
      this.store.select(getOrderNumber).subscribe(orderNumber => this.orderNumber = orderNumber),
      this.store.select(getIsPaymentAdded).subscribe(status => this.isPaymentAdded = status),
      this.store.select(getPaymentEntities).subscribe(data => { this.payment = data[this.paymentMethodId] })
    );
  }

  stripePayment() {
    // Stripe accepts order amount in `cents`.
    const amountInCents = (this.orderAmount * 100);
    this.handler.open({
      name: `${environment.appName}`,
      description: 'Make your payment.',
      amount: amountInCents
    });
  }

  stripeRequestHandler() {
    this.subscriptionList$.push(
      this.paymentService.getStripeKey(this.paymentMethodId).subscribe((responseKey: StripeKey) => {
        this.handler = StripeCheckout.configure({
          key: responseKey.publishable_key,
          image: environment.config.header.brand.logo,
          locale: 'auto',
          // Token to sent to Aviacommerce API to complete the payment process.
          token: cardToken => {
            this.makeStripeRequest(cardToken);
          }
        })
      })
    );
  }

  makeStripeRequest(token: string) {
    this.subscriptionList$.push(
      this.paymentService.makeStripePayment(token, this.orderNumber,
        this.payment.id, this.orderAmount, this.paymentMethodId, this.orderId).subscribe(_ => {
          this.redirectToSuccessPage(this.orderNumber);
        })
    );
  }

  addPayment() {
    this.store.dispatch(this.checkoutActions.bindPayment(this.paymentMethodId, this.orderId, this.orderAmount));
    // Opens popup of stripe checkout.
    this.stripeRequestHandler();
  }

  @HostListener('window:popstate')
  onPopstate() {
    this.handler.close();
  }

  ngOnDestroy() {
  }

  private redirectToSuccessPage(orderNumber) {
    this.router.navigate(['checkout', 'order-success'],
      { queryParams: { orderReferance: orderNumber } });
  }

}
