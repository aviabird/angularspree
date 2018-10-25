import { Component, OnInit, PLATFORM_ID, Inject, Input, OnDestroy } from '@angular/core';
import { CheckoutActions } from '../../../actions/checkout.actions';
import { AppState } from '../../../../interfaces';
import { Store } from '@ngrx/store';
import {
  getPaymentEntities,
  getOrderId,
  getTotalCartValue,
  getOrderNumber,
  getIsPaymentAdded
} from '../../../reducers/selectors';
import { Subscription } from 'rxjs';
import { Payment } from '../../../../core/models/payment';
import { PaymentService } from '../../services/payment.service';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-hosted-payment',
  templateUrl: './hosted-payment.component.html',
  styleUrls: ['./hosted-payment.component.scss']
})
export class HostedPaymentComponent implements OnInit, OnDestroy {
  @Input() paymentMethodId: number;
  subscriptionList$: Array<Subscription> = [];
  isPaymentAdded: boolean;
  orderId: number;
  orderAmount: number;
  payment: Payment;
  orderNumber: string;

  constructor(private paymentService: PaymentService,
    private checkoutActions: CheckoutActions,
    private store: Store<AppState>,
    @Inject(PLATFORM_ID) private platformId: Object
  ) { }

  ngOnInit() {
    this.subscriptionList$.push(
      this.store.select(getOrderId).subscribe(resOrderId => this.orderId = resOrderId),
      this.store.select(getTotalCartValue).subscribe(resOrderAmt => this.orderAmount = resOrderAmt),
      this.store.select(getOrderNumber).subscribe(orderNumber => this.orderNumber = orderNumber),
      this.store.select(getIsPaymentAdded).subscribe(status => this.isPaymentAdded = status)
    );
  }

  makePaymentPayubiz() {
    this.subscriptionList$.push(
      this.store.select(getPaymentEntities).subscribe(data => {
        this.payment = data[this.paymentMethodId]
      })
    );

    this.subscriptionList$.push(
      this.paymentService.makeHostedPayment(
        this.orderId, this.orderNumber, this.payment.id, this.orderAmount, this.paymentMethodId)
        .subscribe((resp: Response) => {
          if (isPlatformBrowser(this.platformId)) {
            window.open(resp.url, '_self');
          }
        })
    );
  }

  addPayment() {
    this.store.dispatch(this.checkoutActions.bindPayment(this.paymentMethodId, this.orderId, this.orderAmount))
  }

  ngOnDestroy() {
    this.subscriptionList$.forEach(sub$ => sub$.unsubscribe());
  }
}
