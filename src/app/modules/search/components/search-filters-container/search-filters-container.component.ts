import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-search-filters-container',
  templateUrl: './search-filters-container.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: []
})
export class SearchFiltersContainerComponent implements OnInit {
  @Input() metaInfo: any;

  constructor() { }

  ngOnInit() {
  }

  clearSearchFilters() {
  }

  get categoryFilter() {
    const filter = {
      name: 'Category',
      items: []
    };

    const { aggregations: { categories: { taxon: { buckets: categories } } } } = this.metaInfo;
    return {
      ...filter,
      items: categories.map(this.formatFilter)
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
      items: brands.map(this.formatFilter)
    };
  }

  get optionFilters() {
    const { aggregations: { options: { option: { buckets: options } } } } = this.metaInfo;

    const formattedFilters =  options.reduce((rv: any, option: any) => {
      const [filter, value] = option.key.split('|');
      rv[filter] = {
        name: filter,
        items: [
          ...(rv[filter] || { items: [] })['items'],
          ...[
            {
              name: value,
              value: value,
              count: option.doc_count
            }
          ]
        ]
      }
      return rv;
    }, {});

    return Object.keys(formattedFilters).map(filterName => formattedFilters[filterName])
  }

  private formatFilter(filter) {
    const [id, name] = filter.key.split('|');
    return {
      value: id,
      name: name,
      count: filter.doc_count
    };
  }

}
