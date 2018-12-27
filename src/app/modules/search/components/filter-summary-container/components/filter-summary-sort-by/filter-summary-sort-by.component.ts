import { SortFilter } from './../../../../models/sort-filter';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SearchingService } from '../../../../services';

@Component({
  selector: 'app-filter-summary-sort-by',
  templateUrl: './filter-summary-sort-by.component.html',
  styleUrls: ['./filter-summary-sort-by.component.scss']
})
export class FilterSummarySortByComponent implements OnInit {
  sortConfig = SearchingService.SORT_CONFIG;
  @Input() currentSort = SearchingService.SORT_CONFIG.find(
    sortOption => sortOption.default
  );
  @Output() selectedSort = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.sortConfig = this.sortConfig.filter(
      sortOption => sortOption.value !== this.currentSort.value
    );
  }

  sortOrder(sortOption: SortFilter) {
    this.currentSort = sortOption;
    this.selectedSort.emit({name: 'sort', value: sortOption.value});
  }

}
