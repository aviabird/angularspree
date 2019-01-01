import { SearchFilter, FilterAgg, RangeAgg } from './../../models/search-param';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SearchAppliedParams } from '../../models/search-param';

@Component({
  selector: 'app-search-filters-container',
  templateUrl: './search-filters-container.component.html',
  styles: []
})
export class SearchFiltersContainerComponent implements OnInit {
  @Input() metaInfo: {
    aggregations: {
      filters: Array<FilterAgg>,
      range_filters: Array<RangeAgg>
    }
  };
  @Input() appliedParams: SearchAppliedParams;
  @Output() filterCleared = new EventEmitter();
  @Output() filterUpdated = new EventEmitter();
  @Output() selectedAggregation = new EventEmitter();
  mainFilter = ['Category', 'Brand'];

  constructor() { }

  ngOnInit() {
  }

  clearSearchFilters() {
    this.filterCleared.emit('');
  }

  get primaryFilters() {
    let { aggregations: { filters: filters } } = this.metaInfo;
    filters = filters.sort(filter => filter.id === 'Category' ? -1 : 0)
    return filters;
  }

  get rangeFilters() {
    const { aggregations: { range_filters: filters } } = this.metaInfo;
    return filters;
  }

  updateFilter(updatedVal: any, filterName: string) {
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

  updateRangeFilter(updatedVal: any, filterName: string) {
    const currentAppliedFilters = this.appliedParams.rangeFilters;
    const filterToUpdate = currentAppliedFilters.find(f => f.id === filterName) || {id: filterName};
    let newCurrentFilters: Array<SearchFilter>;
    const filteredAppliedFilters = currentAppliedFilters.filter(f => f.id !== filterName);

    newCurrentFilters = [
      ...filteredAppliedFilters,
      {
        ...filterToUpdate,
        values: [updatedVal]
      }
    ]

    this.filterUpdated.emit({
      ...this.appliedParams,
      rangeFilters: newCurrentFilters
    });
  }

}
