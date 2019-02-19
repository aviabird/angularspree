import { SearchFilter } from './../../../../models/search-param';
import { Options, LabelType } from 'ng5-slider';
import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy
} from '@angular/core';
import { RangeAgg } from '../../../../models/search-param';

@Component({
  selector: 'app-range-filter',
  templateUrl: './range-filter.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./range-filter.component.scss']
})
export class RangeFilterComponent implements OnInit {
  @Input() filter: RangeAgg;
  @Input() symbol: string;
  @Output() rangeSeleted = new EventEmitter<string>();
  @Input() appliedFilters: Array<SearchFilter>;
  minValue = 0;
  maxValue = 100;
  options: Options = {
    floor: 0,
    ceil: 100,
    translate: (value: number, _: LabelType): string => {
      return `${this.symbol || ''} ${value}`;
    }
  };

  constructor() {}

  ngOnInit() {
    this.options = Object.assign({}, this.options, {
      ceil: this.filter.max
    });

    const currentFilter = this.appliedFilters.find(
      filter => filter.id === this.filter.id
    );

    if (currentFilter) {
      const [min, max] = currentFilter.values[0].split(' TO ');
      this.minValue = parseInt(min, 10);
      this.maxValue = parseInt(max, 10);
    } else {
      this.minValue = this.filter.min;
      this.maxValue = this.filter.max;
    }
  }

  filterUpdated(event: { value: number; highValue: number }) {
    this.rangeSeleted.emit(`${event.value} TO ${event.highValue}`);
  }
}
