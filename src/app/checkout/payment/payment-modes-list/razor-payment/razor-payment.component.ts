import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { PaymentService } from '../../services/payment.service';
import { environment } from '../../../../../environments/environment';
import { Subscription} from 'rxjs';
import { Payment } from '../../../../core/models/payment';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../interfaces';
import {
  getOrderId,
  getTotalCartValue,
  getOrderNumber,
  getIsPaymentAdded,
  getPaymentEntities,
  getShipAddress,
} from '../../../reducers/selectors';
import { CheckoutActions } from '../../../actions/checkout.actions';
import { Router } from '@angular/router';
import { CheckoutService } from '../../../../core/services/checkout.service';
import { Address } from '../../../../core/models/address';
import { PaymentKey } from '../../../../core/models/payment_key';
import { tap, switchMap } from 'rxjs/operators';

declare var Razorpay: any;
@Component({
  selector: 'app-razor-payment',
  templateUrl: './razor-payment.component.html',
  styleUrls: ['./razor-payment.component.scss']
})
export class RazorPaymentComponent implements OnInit, OnDestroy {
  @Input() paymentMethodId: number;
  subscriptionList$: Array<Subscription> = [];
  isPaymentAdded: boolean;
  orderId: number;
  orderAmount: number;
  payment: Payment;
  orderNumber: string;
  address: Address;
  paymentHandler: any;
  loader: boolean;

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

  addPayment() {
    this.store.dispatch(this.checkoutActions.bindPayment(this.paymentMethodId, this.orderId, this.orderAmount));
    this.razorPayRequestHandler();
  }

  razorPayment() {
    // This will open the popup for RazorPay Manual Checkout
    this.paymentHandler.open();
  }

  razorPayRequestHandler() {
    // RazorPay accepts order amount in `paise`.
    const amountInPaisa = Math.ceil((this.orderAmount * 100));
    this.subscriptionList$.push(
      this.paymentService.getRazorKey(this.paymentMethodId).subscribe((responseKey: PaymentKey) => {
        const params = this.razorPayParams(amountInPaisa, responseKey.key_id);
        this.paymentHandler = new Razorpay(params);
      })
    );
  }

  razorPayParams(amountInPaisa: number, razorPayKey: string) {
    const params = {
      key: razorPayKey,
      name: `${environment.appName}`,
      description: this.orderNumber,
      amount: amountInPaisa,
      image: environment.config.header.brand.logoPng,
      handler: (response) => {
        this.loader = true;
        this.processPayment(response);
      }
    }
    return params;
  }

  processPayment(response) {
    const razorPaymentId = response.razorpay_payment_id;
    this.subscriptionList$.push(
      this.paymentService.makeRazorPayPayment(
        razorPaymentId, this.orderNumber,
        this.payment.id, this.orderAmount,
        this.paymentMethodId, this.orderId, this.address
      ).pipe(
        switchMap(order => {
          return this.checkOutService.fetchCurrentOrder().pipe(
            tap(_ => {
              this.loader = false;
              this.redirectToSuccessPage(order.order.order_number);
            })
          )
        })
      ).subscribe()
    )
  }

  private redirectToSuccessPage(orderNumber) {
    this.router.navigate(['checkout', 'order-success'],
      { queryParams: { orderReferance: orderNumber } });
  }

  ngOnDestroy() {
    this.subscriptionList$.forEach(sub$ => sub$.unsubscribe());
  }
}
