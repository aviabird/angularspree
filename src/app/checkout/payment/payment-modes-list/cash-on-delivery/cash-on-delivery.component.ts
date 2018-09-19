import { Component, OnInit, Output, EventEmitter, Input, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../interfaces';
import { CheckoutActions } from '../../../actions/checkout.actions';
import { getOrderId, getTotalCartValue, getIsPaymentAdded } from '../../../reducers/selectors';
import { Subscription } from 'rxjs';
import { PaymentService } from '../../services/payment.service';
import { Payment } from '../../../../core/models/payment';
import { Order } from '../../../../core/models/order';
import { Router } from '@angular/router';
import { CheckoutService } from '../../../../core/services/checkout.service';

@Component({
  selector: 'app-cash-on-delivery',
  templateUrl: './cash-on-delivery.component.html',
  styleUrls: ['./cash-on-delivery.component.scss']
})
export class CashOnDeliveryComponent implements OnInit, OnDestroy {

  @Output() payOnDelivery: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input() paymentMethodId: number;
  orderId: number;
  orderAmount: number;
  subscriptionList$: Array<Subscription> = [];
  payment: Payment;
  isPaymentAdded: boolean;

  constructor(
    private store: Store<AppState>,
    private checkoutActions: CheckoutActions,
    private paymentService: PaymentService,
    private router: Router,
    private checkOutService: CheckoutService
  ) { }

  ngOnInit() {
    this.subscriptionList$.push(
      this.store.select(getOrderId).subscribe(orderId => this.orderId = orderId),
      this.store.select(getTotalCartValue).subscribe(orderAmount => this.orderAmount = orderAmount),
      this.store.select(getIsPaymentAdded).subscribe(status => this.isPaymentAdded = status)
    );
  }

  processCod() {
    this.subscriptionList$.push(
      this.paymentService.makeCodPayment(this.orderId)
        .subscribe((order: Order) => {
          this.checkOutService.fetchCurrentOrder().subscribe(_ => {
            this.redirectToSuccessPage(order.number)
          });
        })
    );
  }

  addPayment() {
    this.store.dispatch(this.checkoutActions.bindPayment(this.paymentMethodId, this.orderId, this.orderAmount))
  }

  private redirectToSuccessPage(orderNumber) {
    this.router.navigate(['checkout', 'order-success'],
      { queryParams: { orderReferance: orderNumber } });
  }

  ngOnDestroy() {
    this.subscriptionList$.forEach(sub$ => sub$.unsubscribe());
  }

}
