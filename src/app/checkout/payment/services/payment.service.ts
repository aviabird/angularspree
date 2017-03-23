import { Injectable } from '@angular/core';

@Injectable()
export class PaymentService {

  setCODAsSelectedMode(modes) {
    let selectedMode;
    modes.forEach((mode) => {
      if (mode.name === 'Check') {
        selectedMode = mode;
      }
    });
    return selectedMode;
  }

}
