import { SearchFilter, FilterAgg, FilterValueAgg } from './../../../../models/search-param';
import { Component, OnInit, Input, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-multiselect-filter',
  templateUrl: './multiselect-filter.component.html',
  styleUrls: ['./multiselect-filter.component.scss']
})
export class MultiselectFilterComponent implements OnInit {
  @Input() filter: FilterAgg;
  @Input() skipCount = 0;
  @Output() filterClick = new EventEmitter<string>();
  @Input() appliedFilters: Array<SearchFilter>;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() { }

  get showFilter() { return this.filter.values.length > 0 }

  selectedItem(id: string) {
    this.filterClick.emit(id);
  }

  isSelected(id: string) {
    const currentFilter = this.appliedFilters
      .find(filter => filter.id === this.filter.id);

    if (currentFilter) {
      return currentFilter.values.indexOf(id) !== -1;
    } else {
      return false
    }
  }
}
