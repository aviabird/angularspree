import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SearchAppliedParams } from '../../../../models/search-param';
import { SearchingService } from '../../../../services';

@Component({
  selector: 'app-filter-summary-filter-list',
  templateUrl: './filter-summary-filter-list.component.html',
  styleUrls: ['./filter-summary-filter-list.component.scss']
})
export class FilterSummaryFilterListComponent implements OnInit {
  @Input() appliedParams: SearchAppliedParams;
  @Output() filterUpdated = new EventEmitter();

  constructor(private searchingService: SearchingService) {}

  ngOnInit() {}

  get filterList() {
    return this.appliedParams.filters;
  }

  updateFilter(updatedVal: any, filterName: string) {
    this.filterUpdated.emit(
      this.searchingService.updateFilter(
        this.appliedParams,
        updatedVal,
        filterName
      )
    );
  }
}
