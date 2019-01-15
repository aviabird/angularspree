import { Observable } from 'rxjs/internal/Observable';
import { SearchState } from './../../store/states/search.state';
import { ApplySearchParams } from './../../store/actions/search.actions';
import { environment } from './../../../../../environments/environment';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { SearchParam, SearchAppliedParams } from '../../models/search-param';
import { SearchingService } from '../../services';
import { Product } from '../../../../core/models';
import { Store, select } from '@ngrx/store';
import { AppState } from '../../../../interfaces';
import { pluck, map } from 'rxjs/operators';
import * as fromSearch from './../../store/selectors/search.selector';

@Component({
  selector: 'app-search-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit, OnDestroy {
  appliedParams: SearchAppliedParams = SearchingService.DEFAULT_APPLIED_FILTERS;
  searchResults: Array<Product>;
  subsArray$: Array<Subscription> = [];
  searchSubs$: Subscription;
  selectedAggregation: any;
  metaInfo: any;
  noSearchImg = '/assets/default/no-search-result.svg';
  searchPlaceholder = environment.config.header.searchPlaceholder;
  searchFound = false;

  constructor(
    private searchService: SearchingService,
    private route: ActivatedRoute,
    private router: Router,
    private store: Store<AppState>
  ) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  ngOnInit() {
    this.subsArray$.push(
      this.store.pipe(map(fromSearch.searchResponse)).subscribe(
        ({ searchResults, metaInfo }) => {
          this.searchResults = searchResults;
          this.metaInfo = metaInfo;
          this.searchFound = searchResults.length > 0;
        })
    );

  }

  updateFilters(appliedParams: SearchAppliedParams) {
    this.appliedParams = appliedParams;
    const queryParams = this.searchService.convertToAPISearchParams(appliedParams);
    this.router.navigate(['/s'], { queryParams });
    this.store.dispatch(new ApplySearchParams(appliedParams))
  }

  ngOnDestroy() {
    this.subsArray$.map(subs => subs.unsubscribe());
  }

  clearFilters() {
    this.updateFilters(SearchingService.DEFAULT_APPLIED_FILTERS);
    this.selectedAggregation = {};
  }

  selectAggregation(aggregation) {
    this.selectedAggregation = aggregation;
  }

  get breadcrumbs() {
    return [
      { crumb: this.appliedParams.q || 'All Categories', link: '#' }
    ]
  }

  onSearch(keyword: string) {
    if (keyword !== '') {
      keyword = keyword.trim();
      this.router.navigate(['/s'], { queryParams: { 'q': keyword } });
    }
  }

}
