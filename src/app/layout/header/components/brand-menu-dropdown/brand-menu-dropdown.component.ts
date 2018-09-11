import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from './../../../../interfaces';
import { SearchActions } from './../../../../search/reducers/search.actions';
import { Component, OnInit, Input, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-brand-menu-dropdown',
  templateUrl: './brand-menu-dropdown.component.html',
  styleUrls: ['./brand-menu-dropdown.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BrandMenuDropdownComponent implements OnInit, OnDestroy {
  @Input() taxonomies;
  queryParams: any;
  isOpen: any;
  subscriptionList$: Array<Subscription> = [];
  constructor(
    private searchActions: SearchActions,
    private store: Store<AppState>,
    private route: ActivatedRoute
  ) {
    this.subscriptionList$.push(
      this.route.queryParams
        .subscribe(params => {
          this.queryParams = params
        })
    );
  }

  ngOnInit() {
  }

  getBrands(id: string): void {
    this.store.dispatch(this.searchActions.getProductsByTaxon(`id=${id}`));
  }

  onOpenChange(_): void {
    this.isOpen = !this.isOpen;
  }

  ngOnDestroy() {
    this.subscriptionList$.forEach(sub$ => sub$.unsubscribe());
  }
}
