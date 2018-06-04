import { SearchActions } from './../../reducers/search.actions';
import { getFilters } from './../../reducers/selectors';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from './../../../interfaces';
import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-taxons',
  templateUrl: './taxons.component.html',
  styleUrls: ['./taxons.component.scss']
})
export class TaxonsComponent implements OnInit {
  @Input() taxonomies;
  searchFilters$: Observable<any>;
  selectedFilters = [];

  constructor(private store: Store<AppState>, 
    private actions: SearchActions,
    private ref: ChangeDetectorRef) {
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
