import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'random'
})
export class RandomPipe implements PipeTransform {

  transform (input: any, min: number = 0, max: number = 1): any {

    if (!this.isNumberFinite(min) || !this.isNumberFinite(max)) {
      return input;
    }

    if (min > max) {
      max = min;
      min = 0;
    }

    return Math.floor(Math.random() * (max - min) + min);
  }

  isNumberFinite (value: any): value is number {
    return this.isNumber(value) && isFinite(value);
  }

  isNumber (value: any): value is number {
    return typeof value === 'number';
  }

}
