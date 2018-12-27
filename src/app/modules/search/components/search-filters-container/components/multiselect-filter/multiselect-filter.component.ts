import { FilterAgg } from './../../../../models/search-param';
import { Component, OnInit, Input, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-multiselect-filter',
  templateUrl: './multiselect-filter.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./multiselect-filter.component.scss']
})
export class MultiselectFilterComponent implements OnInit {
  @Input() filter: any;
  @Input() skipCount = 0;
  @Output() filterClick = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  get showFilter() { return this.filter.filterValues.length > 0 }

  selectedItem(id: string) {
    this.filterClick.emit(id);
  }

}
