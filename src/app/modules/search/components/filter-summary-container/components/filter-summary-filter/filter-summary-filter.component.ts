import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter-summary-filter',
  templateUrl: './filter-summary-filter.component.html',
  styleUrls: ['./filter-summary-filter.component.scss']
})
export class FilterSummaryFilterComponent implements OnInit {
  @Input() filter;
  @Output() removeFilter = new EventEmitter();

  constructor() { }

  ngOnInit() {}

  removeFilterClicked() {
    this.removeFilter.emit();
  }

}
