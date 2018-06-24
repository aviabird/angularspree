import { SearchActions } from './../../reducers/search.actions';
import { getFilters } from './../../reducers/selectors';
import { AppState } from './../../../interfaces';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-filter-summary',
  templateUrl: './filter-summary.component.html',
  styleUrls: ['./filter-summary.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilterSummaryComponent implements OnInit {
  filters$: Observable<any>;

  constructor(private store: Store<AppState>,
    private search: SearchActions) {
    this.filters$ = this.store.select(getFilters);
  }

  ngOnInit() {
  }

  removeFilter(removedFilter) {
    this.store.dispatch(this.search.removeFilter(removedFilter));
  }

}
