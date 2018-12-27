import { Component, OnInit, Input, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { SearchAppliedParams } from '../../models/search-param';

@Component({
  selector: 'app-search-filters-container',
  templateUrl: './search-filters-container.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: []
})
export class SearchFiltersContainerComponent implements OnInit {
  @Input() metaInfo: any;
  @Input() appliedParams: SearchAppliedParams;
  @Output() filterCleared = new EventEmitter();
  @Output() filterUpdated = new EventEmitter();
  @Output() selectedAggregation = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  clearSearchFilters() {
    this.filterCleared.emit('');
  }

  get categoryFilter() {
    const filter = {
      name: 'Category',
      items: []
    };

    const { aggregations: { filters: { categories: categories } } } = this.metaInfo;
    return {
      ...filter,
      items: categories.map(category => this.formatFilter(category, 'categories'))
    };
  }

  get brandFilter() {
    const filter = {
      name: 'Brand',
      items: []
    };

    const { aggregations: { filters: { brands: brands } } } = this.metaInfo;
    return {
      ...filter,
      items: brands.map(brand => this.formatFilter(brand, 'brand'))
    };
  }

  get optionFilters() {
    const { aggregations: { filters: { optionFilters: optionFilters } } } = this.metaInfo;
    return optionFilters;
  }

  private formatFilter(filter, filterName) {
    const isSelected = (this.appliedParams[filterName] || []).find(val => val === filter.id);
    return {
      value: filter.id,
      name: filter.name,
      count: filter.count,
      selected: isSelected
    };
  }

  multiFilterUpdated(value: any, filterName: string) {
    let filterValues = this.appliedParams.filters[filterName] || [];
    const if_exists = filterValues.find((val: any) => val === value);
    filterValues = filterValues.filter((val: any) => val !== value);

    this.selectedAggregation.emit({ [filterName]: this.metaInfo.aggregations.filters[filterName] });

    this.filterUpdated.emit(
      Object.assign(
        {},
        this.appliedParams,
        {
          [filterName]: if_exists ? filterValues : [...filterValues, value]
        }
      )
    );
  }

  multiOptionFilterUpdated(value: string, filterName: string) {
  }

}
