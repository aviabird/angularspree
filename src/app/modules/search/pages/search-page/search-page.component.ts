import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { SearchParam } from '../../models/search-param';
import { SearchingService } from '../../services';
import { Product } from '../../../../core/models';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit, OnDestroy {
  appliedParams: SearchParam = { ...SearchingService.DEFAULT_FILTER };
  searchResults: Array<Product>;
  searchSubs$: Subscription;
  selectedAggregation: any;
  metaInfo: any;

  constructor(
    private searchService: SearchingService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  ngOnInit() {
    this.route.queryParams.subscribe((params: Object) => {
      this.updateFilters({
        ...this.appliedParams,
        ...params
      })
    });

    this.searchSubs$ = this.route.data
      .subscribe(({ resp: { data, meta } }) => {
        this.searchResults = data;
        meta.aggregations.filters = {
          ...meta.aggregations.filters,
          ...this.selectedAggregation
        }
        this.metaInfo = meta;
      });
  }

  updateFilters(updatedFilter: SearchParam) {
    this.appliedParams = updatedFilter;
    this.search(updatedFilter);
  }

  search(filterParams: SearchParam) {
    if (this.searchSubs$) { this.searchSubs$.unsubscribe() }
    this.searchSubs$ = this.searchService.search(filterParams)
      .subscribe(({ data, meta }) => {
        this.searchResults = data;
        meta.aggregations.filters = {
          ...meta.aggregations.filters,
          ...this.selectedAggregation
        }
        this.metaInfo = meta;
      });
  }

  ngOnDestroy() {
    this.searchSubs$.unsubscribe();
  }

  clearFilters() {
    this.updateFilters({ ...SearchingService.DEFAULT_FILTER });
    this.selectedAggregation = {};
  }

  selectAggregation(aggregation) {
    this.selectedAggregation = aggregation;
  }

  get breadcrumbs() {
    return [
      { crumb: this.appliedParams.q || 'All Categories', link: '#'}
    ]
  }

}
