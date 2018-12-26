import { Component, OnInit, Input, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { SearchParam } from '../../models/search-param';

@Component({
  selector: 'app-search-filters-container',
  templateUrl: './search-filters-container.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: []
})
export class SearchFiltersContainerComponent implements OnInit {
  @Input() metaInfo: any;
  @Input() appliedFilters: SearchParam;
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

    const { aggregations: { brand: { buckets: brands } } } = this.metaInfo;
    return {
      ...filter,
      items: brands.map(brand => this.formatFilter(brand, 'brand'))
    };
  }

  get optionFilters() {
    const { aggregations: { options: { option: { buckets: options } } } } = this.metaInfo;

    const formattedFilters = options.reduce((rv: any, option: any) => {
      const [filter, value] = option.key.split('|');

      const isSelected = (
        (this.appliedFilters.filter_options || []).find(fo => fo.name === filter) || { value: [] }
      ).value.find(val => val === value);

      rv[filter] = {
        name: filter,
        items: [
          ...(rv[filter] || { items: [] })['items'],
          ...[
            {
              name: value,
              value: value,
              count: option.doc_count,
              selected: isSelected
            }
          ]
        ]
      }
      return rv;
    }, {});

    return Object.keys(formattedFilters).map(filterName => formattedFilters[filterName])
  }

  private formatFilter(filter, filterName) {
    const isSelected = (this.appliedFilters[filterName] || []).find(val => val === filter.id);
    return {
      value: filter.id,
      name: filter.name,
      count: filter.count,
      selected: isSelected
    };
  }

  multiFilterUpdated(value: any, filterName: string) {
    let filterValues = this.appliedFilters[filterName] || [];
    const if_exists = filterValues.find((val: any) => val === value);
    filterValues = filterValues.filter((val: any) => val !== value);

    this.selectedAggregation.emit({ [filterName]: this.metaInfo.aggregations[filterName] });

    this.filterUpdated.emit(
      Object.assign(
        {},
        this.appliedFilters,
        {
          [filterName]: if_exists ? filterValues : [...filterValues, value]
        }
      )
    );
  }

  multiOptionFilterUpdated(value: string, filterName: string) {
    let filterOptions = this.appliedFilters.filter_options || [];
    const selectedFilterOption = filterOptions.find(option => option.name === filterName) || { value: [] };
    const if_exists = selectedFilterOption.value.find(ov => ov === value);
    const selectedFilterOptionValues = selectedFilterOption.value.filter(ov => ov !== value)
    filterOptions = filterOptions.filter(fo => fo.name !== filterName);

    this.appliedFilters.filter_options = [
      ...filterOptions,
      {
        name: filterName,
        value: if_exists ? selectedFilterOptionValues : [...selectedFilterOptionValues, value]
      }
    ]

    this.filterUpdated.emit(
      Object.assign(
        {},
        this.appliedFilters
      )
    );
  }

}
