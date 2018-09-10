import { ActivatedRoute } from '@angular/router';
import { AppState } from './../../../interfaces';
import { Store } from '@ngrx/store';
import { SearchActions } from './../../reducers/search.actions';
import { Component, OnInit, Input, EventEmitter, Output, Inject, PLATFORM_ID, OnDestroy } from '@angular/core';
import { URLSearchParams } from '@angular/http'
import { isPlatformBrowser } from '@angular/common';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit, OnDestroy {
  @Input() taxonomiList;
  @Input() isFilterOn;
  @Input() categoryLevel;
  @Output() onSelected = new EventEmitter<Object>();
  @Output() showAll = new EventEmitter<Object>();
  queryParams: any;
  subscriptionList$: Array<Subscription> = [];
  brands: any;

  constructor(
    private searchActions: SearchActions,
    private store: Store<AppState>,
    private router: ActivatedRoute,
    @Inject(PLATFORM_ID) private platformId: any
  ) {
    this.subscriptionList$.push(
      this.router.queryParams
        .subscribe(params => {
          this.queryParams = params
        })
    )
  }

  ngOnInit() {
    if ('id' in this.queryParams) {
      this.catgeoryFilter();
    }
  }
  showAllCategory() {
    this.showAll.emit()
    if (isPlatformBrowser(this.platformId)) {
      // Need refactoer this code
      window.location.reload();
    }
  }

  /**
   *
   *
   * @memberof CategoriesComponent
   */
  catgeoryFilter() {
    const search = new URLSearchParams();
    if ('page' in this.queryParams) {
      search.set('page', this.queryParams.page);
    }
    search.set('id', this.queryParams.id);
    this.store.dispatch(this.searchActions.getProductsByTaxon(search.toString()));
  }

  emitSelection(root) {
    this.catgeoryFilter()
    this.onSelected.emit({ id: this.queryParams.id, name: this.queryParams['q[name_cont]'] });
  }

  ngOnDestroy() {
    this.subscriptionList$.forEach(sub$ => sub$.unsubscribe());
  }
}
