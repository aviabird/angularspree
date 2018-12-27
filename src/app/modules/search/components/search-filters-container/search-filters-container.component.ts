import { SearchFilter, FilterAgg } from './../../models/search-param';
import { Component, OnInit, Input, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { SearchAppliedParams } from '../../models/search-param';

@Component({
  selector: 'app-search-filters-container',
  templateUrl: './search-filters-container.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: []
})
export class SearchFiltersContainerComponent implements OnInit {
  @Input() metaInfo: {
    aggregations: {
      filters: Array<FilterAgg>
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
    const { aggregations: { filters: filters } } = this.metaInfo;
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

}
