import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SearchFilter, SearchAppliedParams } from '../../../../models/search-param';

@Component({
  selector: 'app-filter-summary-filter-list',
  templateUrl: './filter-summary-filter-list.component.html',
  styleUrls: ['./filter-summary-filter-list.component.scss']
})
export class FilterSummaryFilterListComponent implements OnInit {
  @Input() appliedParams: SearchAppliedParams;
  @Output() filterUpdated = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  get filterList() {
    return this.appliedParams.filters
      .reduce((acc, filter) => acc.concat(filter.values), []);
  }


  updateFilter(updatedVal: any, filterName: string) {
    console.log(this.updateFilter);
    const currentAppliedFilters = this.appliedParams.filters;
    const filterToUpdate = currentAppliedFilters.find(f => f.id === filterName);
    let newCurrentFilters: Array<SearchFilter>;

    if (filterToUpdate) {
      const currentValues = filterToUpdate.values;
      const exists = currentValues.find(v => v === updatedVal);
      const filteredValues = currentValues.filter(v => v !== updatedVal);
      const filteredAppliedFilters = currentAppliedFilters.filter(f => f.id !== filterName);
      newCurrentFilters = [
        ...filteredAppliedFilters,
        {
          ...filterToUpdate,
          values: exists ? filteredValues : [...filteredValues, updatedVal]
        }
      ]
    } else {
      newCurrentFilters = [
        ...currentAppliedFilters,
        {
          id: filterName,
          values: [updatedVal]
        }
      ]
    }

    this.filterUpdated.emit({
      ...this.appliedParams,
      filters: newCurrentFilters
    });
  }

}
