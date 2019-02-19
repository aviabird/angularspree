import {
  SearchFilter,
  FilterAgg,
  RangeAgg,
  SearchMetaInfo
} from './../../models/search-param';
import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy
} from '@angular/core';
import { SearchAppliedParams } from '../../models/search-param';
import { SearchingService } from '../../services';

@Component({
  selector: 'app-search-filters-container',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './search-filters-container.component.html',
  styles: []
})
export class SearchFiltersContainerComponent implements OnInit {
  @Input() metaInfo: SearchMetaInfo;
  @Input() appliedParams: SearchAppliedParams;
  @Output() filterCleared = new EventEmitter();
  @Output() filterUpdated = new EventEmitter();
  @Output() selectedAggregation = new EventEmitter();
  mainFilter = ['Category', 'Brand'];

  constructor(private searchingService: SearchingService) {}

  ngOnInit() {}

  clearSearchFilters() {
    this.filterCleared.emit('');
  }

  get primaryFilters() {
    const {
      aggregations: { filters: filters }
    } = this.metaInfo;
    return filters.slice().sort(filter => (filter.id === 'Category' ? -1 : 0));
  }

  get rangeFilters() {
    const {
      aggregations: { range_filters: filters }
    } = this.metaInfo;
    return filters;
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

  updateRangeFilter(updatedVal: any, filterName: string) {
    const currentAppliedFilters = this.appliedParams.rangeFilters;
    const filterToUpdate = currentAppliedFilters.find(
      f => f.id === filterName
    ) || { id: filterName };
    let newCurrentFilters: Array<SearchFilter>;
    const filteredAppliedFilters = currentAppliedFilters.filter(
      f => f.id !== filterName
    );

    newCurrentFilters = [
      ...filteredAppliedFilters,
      {
        ...filterToUpdate,
        values: [updatedVal]
      }
    ];

    this.filterUpdated.emit({
      ...this.appliedParams,
      rangeFilters: newCurrentFilters
    });
  }
}
