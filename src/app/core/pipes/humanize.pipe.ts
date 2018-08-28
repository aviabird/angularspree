import { Pipe } from '@angular/core';

// tslint:disable-next-line:use-pipe-transform-interface
@Pipe({ name: 'humanize' })

export class HumanizePipe {

  /**
   *
   *
   * @param {string | null} value
   * @returns
   *
   * @memberof HumanizePipe
   */
  transform(value: string | null) {
    let updated_val = value;
    if (typeof(value) === 'string') {
      updated_val = value.replace(/\_/g, ' ');
    }
    return updated_val;
  }

};
