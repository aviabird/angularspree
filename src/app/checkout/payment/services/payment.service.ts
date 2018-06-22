import { Injectable } from '@angular/core';

@Injectable()
export class PaymentService {

  setCODAsSelectedMode(modes) {
    let selectedMode;
    modes.forEach((mode) => {
      if (mode.name === 'Credit Card') {
        selectedMode = mode;
      }
    });
    return selectedMode;
  }

}
