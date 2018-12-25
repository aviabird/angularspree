import { Observable, Subscription } from 'rxjs';
import { Component, OnInit, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { SearchParam } from '../../models/search-param';
import { SearchingService } from '../../services';
import { Product } from '../../../../core/models';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  // changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit, OnDestroy {
  appliedFilters: SearchParam = {
    page: { limit: '20', offset: '1' }
  };
  searchResults: Array<Product>;
  searchSubs$: Subscription;
  metaInfo: any;

  constructor(
    private searchService: SearchingService
  ) { }

  ngOnInit() {
    this.search(this.appliedFilters);
  }

  filterUpdated(updatedFilter: SearchParam) {
    this.appliedFilters = updatedFilter;
    this.search(updatedFilter);
  }

  search(filterParams: SearchParam) {
    if (this.searchSubs$) { this.searchSubs$.unsubscribe() }
    this.searchSubs$ = this.searchService.search(filterParams)
      .subscribe(resp => {
        const {data, meta} = resp;
        this.searchResults = data;
        this.metaInfo = meta;
      });
  }

  ngOnDestroy() {
    this.searchSubs$.unsubscribe();
  }

}
