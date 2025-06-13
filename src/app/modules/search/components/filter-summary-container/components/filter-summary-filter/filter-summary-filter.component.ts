import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter-summary-filter',
  templateUrl: './filter-summary-filter.component.html',
  
})
export class FilterSummaryFilterComponent implements OnInit {
  @Input() filterValue: string;
  @Output() removeFilter = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  removeFilterClicked() {
    this.removeFilter.emit();
  }
}
