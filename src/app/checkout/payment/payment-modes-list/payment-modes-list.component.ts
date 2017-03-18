import { CheckoutService } from './../../../core/services/checkout.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment-modes-list',
  templateUrl: './payment-modes-list.component.html',
  styleUrls: ['./payment-modes-list.component.scss']
})
export class PaymentModesListComponent implements OnInit {

  paymentModes = [];
  selectedMode = {};

  constructor(private checkoutService: CheckoutService) {
    this.fetchAllPayments();
  }

  ngOnInit() {
  }

  selectedPaymentMode(mode) {
    this.selectedMode = mode;
  }

  private fetchAllPayments() {
    this.checkoutService.availablePaymentMethods()
      .subscribe((payment) => {
        this.paymentModes = payment.payment_methods;
        this.selectedMode = this.setCODAsSelectedMode();
      });
  }

  private setCODAsSelectedMode() {
    if (this.paymentModes.length === 0) {
      return {};
    }

    this.paymentModes.forEach((mode) => {
      if (mode.name === 'Check') {
        return mode;
      }
    });
    return this.paymentModes[1];
  }


}
