import { environment } from './../../../../../environments/environment';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { SearchParam, SearchAppliedParams } from '../../models/search-param';
import { SearchingService } from '../../services';
import { Product } from '../../../../core/models';

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
  selectedAggregation: any;
  metaInfo: any;
  noSearchImg = '/assets/default/no-search-result.svg';
  searchPlaceholder = environment.config.header.searchPlaceholder;
  searchFound = false;

  constructor(
    private searchService: SearchingService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  ngOnInit() {
    this.subsArray$.push(
      this.route.data
        .subscribe(({ resp: { data, meta } }) => {
          this.searchResults = data;
          this.metaInfo = meta;
          this.searchFound = data.length > 0;
        }),
      this.route.queryParams.subscribe((params: SearchParam) => {
        this.appliedParams = this.searchService.convertToAppliedParams(params);
        this.search(this.searchService.convertToAppliedParams(params));
      })
    );

  }

  updateFilters(appliedParams: SearchAppliedParams) {
    this.appliedParams = appliedParams;
    const queryParams = this.searchService.convertToAPISearchParams(appliedParams);
    this.router.navigate(['/s'], { queryParams });
  }

  search(appliedParams: SearchAppliedParams) {
    const apiParams = this.searchService.convertToAPISearchParams(appliedParams);
    if (this.searchSubs$) { this.searchSubs$.unsubscribe() }
    this.searchFound = true;
    this.searchSubs$ = this.searchService.search(apiParams)
      .subscribe(({ data, meta }) => {
        this.searchResults = [...data];
        this.metaInfo = {...meta};
        this.searchFound = data.length > 0;
      })
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
