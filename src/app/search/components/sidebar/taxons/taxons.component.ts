import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Component, OnInit, Input } from '@angular/core';

import { SearchActions } from './../../../reducers/search.actions';
import { getFilters } from './../../../reducers/selectors';
import { AppState } from './../../../../interfaces';

@Component({
  selector: 'app-taxons',
  templateUrl: './taxons.component.html',
  styleUrls: ['./taxons.component.scss']
})
export class TaxonsComponent implements OnInit {
  @Input() taxonomies;
  searchFilters$: Observable<any>;
  selectedFilters = [];

  constructor(
    private store: Store<AppState>,
    private actions: SearchActions
  ) {
    this.searchFilters$ = this.store.select(getFilters);
    this.searchFilters$.subscribe(data => {
      this.selectedFilters = data;
    });
  }

  ngOnInit() {
  }

  isChecked(taxon) {
    let result = false;
    this.selectedFilters.forEach((filter) => {
      if (filter.id === taxon.id) {
        result = true;
      }
    });
    return result;
  }

  taxonSelected(taxon, checked) {
    if (checked) {
      this.store.dispatch(this.actions.addFilter(taxon));
    } else {
      this.store.dispatch(this.actions.removeFilter(taxon));
    }
  }
}
