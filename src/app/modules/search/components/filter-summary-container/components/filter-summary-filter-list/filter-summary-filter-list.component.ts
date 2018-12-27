import { Component, OnInit, Input } from '@angular/core';
import { SearchAppliedParams } from '../../../../models/search-param';

@Component({
  selector: 'app-filter-summary-filter-list',
  templateUrl: './filter-summary-filter-list.component.html',
  styleUrls: ['./filter-summary-filter-list.component.scss']
})
export class FilterSummaryFilterListComponent implements OnInit {
  @Input() appliedParams: SearchAppliedParams;

  constructor() { }

  ngOnInit() {
  }

  get filterList() {
    return this.appliedParams.filters
      .reduce((acc, filter) => acc.concat(filter.values), []);
  }

}
