import { Pipe } from '@angular/core';

// tslint:disable-next-line:use-pipe-transform-interface
@Pipe({ name: 'humanize' })

export class HumanizePipe {

  /**
   *
   *
   * @param {any} value
   * @returns
   *
   * @memberof HumanizePipe
   */
  transform(value) {
    let updated_val = value;
    if (typeof(value) === 'string') {
      updated_val = value.replace(/\_/g, ' ');
    }
    return updated_val;
  }

};
