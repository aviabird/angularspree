import { SearchParam } from './../../models/search-param';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter-summary-container',
  templateUrl: './filter-summary-container.component.html',
  styleUrls: ['./filter-summary-container.component.scss']
})
export class FilterSummaryContainerComponent implements OnInit {
  @Input() appliedFilters: SearchParam;
  @Output() updatedFilters = new EventEmitter<SearchParam>();

  constructor() { }

  ngOnInit() {
  }

  filterUpdated(filter: { name: any; value: any; }) {
    this.updatedFilters.emit({...this.appliedFilters, [filter.name]: filter.value})
  }

}
