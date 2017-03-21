import { Injectable } from '@angular/core';

@Injectable()
export class PaymentService {

  setCODAsSelectedMode(modes) {
    if (modes.length === 0) {
      return {};
    }

    modes.forEach((mode) => {
      if (mode.name === 'Check') {
        return mode;
      }
    });
    return modes[1];
  }

}
