import { Component, OnInit, Input, OnDestroy, HostListener } from '@angular/core';
import { PaymentService } from '../../services/payment.service';
import { environment } from '../../../../../environments/environment';
import { Subscription } from 'rxjs';
import { Payment } from '../../../../core/models/payment';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../interfaces';
import {
  getOrderId,
  getTotalCartValue,
  getOrderNumber,
  getIsPaymentAdded,
  getPaymentEntities,
  getShipAddress
} from '../../../reducers/selectors';
import { CheckoutActions } from '../../../actions/checkout.actions';
import { StripeKey } from '../../../../core/models/stripe';
import { Router } from '@angular/router';
import { CheckoutService } from '../../../../core/services/checkout.service';
import { Address } from '../../../../core/models/address';


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
  address: Address;

  constructor(
    private paymentService: PaymentService,
    private store: Store<AppState>,
    private checkoutActions: CheckoutActions,
    private router: Router,
    private checkOutService: CheckoutService,
  ) { }

  ngOnInit() {
    this.subscriptionList$.push(
      this.store.select(getOrderId).subscribe(resOrderId => this.orderId = resOrderId),
      this.store.select(getTotalCartValue).subscribe(resOrderAmt => this.orderAmount = resOrderAmt),
      this.store.select(getOrderNumber).subscribe(orderNumber => this.orderNumber = orderNumber),
      this.store.select(getIsPaymentAdded).subscribe(status => this.isPaymentAdded = status),
      this.store.select(getPaymentEntities).subscribe(data => { this.payment = data[this.paymentMethodId] }),
      this.store.select(getShipAddress).subscribe(address => { this.address = address })
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

    this.handler.open({
      closed: function () {
      }
    })
  }

  stripeRequestHandler() {
    this.subscriptionList$.push(
      this.paymentService.getStripeKey(this.paymentMethodId).subscribe((responseKey: StripeKey) => {
        this.handler = StripeCheckout.configure({
          key: responseKey.publishable_key,
          image: environment.config.header.brand.logoPng,
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
        this.payment.id, this.orderAmount, this.paymentMethodId, this.orderId, this.address).subscribe(order => {
          this.checkOutService.fetchCurrentOrder().subscribe(_ => {
            this.redirectToSuccessPage(order.number)
          });
        })
    )
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

  private redirectToSuccessPage(orderNumber) {
    this.router.navigate(['checkout', 'order-success'],
      { queryParams: { orderReferance: orderNumber } });
  }

  ngOnDestroy() {
    this.subscriptionList$.forEach(sub$ => sub$.unsubscribe());
  }
}
