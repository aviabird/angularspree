import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';

@Injectable()
export class PaymentService {
  paymentMethodName= environment.config.defaultPaymentMethod;
  getDefaultSelectedMode(modes) {
    let selectedMode;
    modes.forEach((mode) => {
      if (mode.name === this.paymentMethodName) {
        selectedMode = mode;
      }

    });
    return selectedMode;
  }

}
