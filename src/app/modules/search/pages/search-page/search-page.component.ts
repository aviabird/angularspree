import { ApplySearchParams } from './../../store/actions/search.actions';
import { environment } from './../../../../../environments/environment';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { SearchAppliedParams } from '../../models/search-param';
import { SearchingService } from '../../services';
import { Product } from '../../../../core/models';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../interfaces';
import { map } from 'rxjs/operators';
import * as fromSearch from './../../store/selectors/search.selector';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit, OnDestroy {
  appliedParams: SearchAppliedParams = SearchingService.DEFAULT_APPLIED_FILTERS;
  searchResults: Array<Product>;
  subsArray$: Array<Subscription> = [];
  searchSubs$: Subscription;
  metaInfo: any;
  noSearchImg = '/assets/default/no-search-result.svg';
  searchPlaceholder = environment.config.header.searchPlaceholder;
  searchFound = false;

  constructor(
    private searchService: SearchingService,
    private route: ActivatedRoute,
    private router: Router,
    private store: Store<AppState>
  ) {}

  ngOnInit() {
    this.subsArray$.push(
      this.store
        .pipe(map(fromSearch.searchResponse))
        .subscribe(({ searchResults, metaInfo, appliedParams }) => {
          this.searchResults = searchResults;
          this.metaInfo = metaInfo;
          this.appliedParams = appliedParams;
          this.searchFound = searchResults.length > 0;
        }),
      this.route.queryParams.subscribe(params => {
        const appliedParams = this.searchService.convertToAppliedParams(params);
        this.store.dispatch(new ApplySearchParams(appliedParams));
      })
    );
  }

  updateFilters(appliedParams: SearchAppliedParams) {
    const queryParams = this.searchService.convertToAPISearchParams(
      appliedParams
    );
    this.router.navigate(['/s'], { queryParams });
  }

  ngOnDestroy() {
    this.subsArray$.map(subs => subs.unsubscribe());
  }

  clearFilters() {
    this.updateFilters(SearchingService.DEFAULT_APPLIED_FILTERS);
  }

  get breadcrumbs() {
    return [{ crumb: this.appliedParams.q || 'All Categories', link: '#' }];
  }

  onSearch(keyword: string) {
    if (keyword !== '') {
      keyword = keyword.trim();
      this.router.navigate(['/s'], { queryParams: { q: keyword } });
    }
  }
}
