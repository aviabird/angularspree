import { SearchParam, SearchAppliedParams } from './../../models/search-param';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SearchingService } from '../../services';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../interfaces';
@Component({
  selector: 'app-filter-summary-container',
  templateUrl: './filter-summary-container.component.html',
  styleUrls: ['./filter-summary-container.component.scss']
})
export class FilterSummaryContainerComponent implements OnInit {
  @Input() appliedParams: SearchAppliedParams;
  @Output() updatedFilters = new EventEmitter<SearchParam>();

  constructor(
    private searchService: SearchingService,
    private router: Router,
    private store: Store<AppState>
  ) {}

  ngOnInit() {}

  filterUpdated(filter: { name: any; value: any }) {
    this.updatedFilters.emit({
      ...this.appliedParams,
      [filter.name]: filter.value
    });
  }

  updateFilters(appliedParams: SearchAppliedParams) {
    const queryParams = this.searchService.convertToAPISearchParams(
      appliedParams
    );
    this.router.navigate(['/s'], { queryParams });
  }
}
