import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'humanize' })

export class HumanizePipe implements PipeTransform {

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
    if (typeof (value) === 'string') {
      updated_val = value.replace(/\_/g, ' ');
    }
    return updated_val;
  }

};
