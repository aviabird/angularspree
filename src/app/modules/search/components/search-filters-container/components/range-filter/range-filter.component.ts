import { Options, LabelType } from 'ng5-slider';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { RangeAgg } from '../../../../models/search-param';

@Component({
  selector: 'app-range-filter',
  templateUrl: './range-filter.component.html',
  styleUrls: ['./range-filter.component.scss']
})
export class RangeFilterComponent implements OnInit {
  @Input() filter: RangeAgg;
  @Input() symbol: string;
  @Output() rangeSeleted = new EventEmitter<string>();
  options: Options = {
    floor: 0,
    translate: (value: number, _: LabelType): string => {
      return this.symbol + value;
    }
  };

  constructor() { }

  ngOnInit() {
  }

  filterUpdated(event: { value: number; highValue: number; }) {
    this.rangeSeleted.emit(`${event.value} TO ${event.highValue}`);
  }
}
