import { Payment } from './../../core/models/payment';
import { CheckoutService } from './../../core/services/checkout.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  paymentMethods: Payment[] = [];

  constructor(private checkoutService: CheckoutService) {
    this.fetchAllPayments();
  }

  ngOnInit() {
  }

  fetchAllPayments() {
    this.checkoutService.availablePaymentMethods()
      .subscribe((payment) => {
        this.paymentMethods = payment.payment_methods;
      });
  }

}
