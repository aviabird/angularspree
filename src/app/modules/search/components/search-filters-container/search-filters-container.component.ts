import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-search-filters-container',
  templateUrl: './search-filters-container.component.html',
  styles: []
})
export class SearchFiltersContainerComponent implements OnInit {
  @Input() metaInfo: any;

  optionFilters = [
    {
      'name': 'Size',
      'items': [
        {
          'count': 1,
          'name': 'S',
          'value': 'S'
        },
        {
          'count': 2,
          'name': 'M',
          'value': 'M'
        },
        {
          'count': 3,
          'name': 'L',
          'value': 'L'
        },
        {
          'count': 4,
          'name': 'X',
          'value': 'X'
        }
      ]
    },
    {
      'name': 'Material',
      'items': [
        {
          'count': 1,
          'name': 'Cotton',
          'value': 'cotton'
        },
        {
          'count': 2,
          'name': 'Crepe',
          'value': 'crepe'
        },
        {
          'count': 3,
          'name': 'Silk',
          'value': 'silk'
        }
      ]
    }
  ];

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

    if (!this.metaInfo) { return filter };

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

    if (!this.metaInfo) { return filter };

    const { aggregations: { brand: { buckets: brands } } } = this.metaInfo;
    return {
      ...filter,
      items: brands.map(this.formatFilter)
    };
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
