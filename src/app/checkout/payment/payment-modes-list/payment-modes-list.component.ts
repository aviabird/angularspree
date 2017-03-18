import { CheckoutService } from './../../../core/services/checkout.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment-modes-list',
  templateUrl: './payment-modes-list.component.html',
  styleUrls: ['./payment-modes-list.component.scss']
})
export class PaymentModesListComponent implements OnInit {

  paymentModes = [];

  constructor(private checkoutService: CheckoutService) {
    this.fetchAllPayments();
  }

  ngOnInit() {
  }

  fetchAllPayments() {
    this.checkoutService.availablePaymentMethods()
      .subscribe((payment) => {
        this.paymentModes = payment.payment_methods;
      });
  }

  selectedPaymentMode(id) {
    console.log('mode id', id);
  }


}
