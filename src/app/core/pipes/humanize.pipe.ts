import { Pipe } from '@angular/core';

// tslint:disable-next-line:use-pipe-transform-interface
@Pipe({ name: 'humanize' })

export class HumanizePipe {

  transform(value) {
    return (value.replace(/\_/g, ' '));
  }

};
