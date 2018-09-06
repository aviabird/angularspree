import { getlayoutStateJS } from '../layout/reducers/layout.selector';
import { SearchActions } from './reducers/search.actions';
import {
  getSelectedTaxonIds,
  getProductsByKeyword,
  getChildTaxons,
  categeoryLevel,
  taxonomiByName,
  getPaginationData,
  searchFilterStatus
} from './reducers/selectors';
import { ProductActions } from '../product/actions/product-actions';
import { AppState } from '../interfaces';
import { getTaxonomies, rootTaxonomyId } from '../product/reducers/selectors';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { Component, OnInit, ViewChild, ChangeDetectionStrategy, PLATFORM_ID, Inject, OnDestroy } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { Product } from '../core/models/product';
import { isPlatformBrowser } from '@angular/common';
import { LayoutState } from '../layout/reducers/layout.state';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchComponent implements OnInit, OnDestroy {
  taxonomies$: Observable<any>;
  brands$: Observable<any>;
  selectedTaxonIds$: Observable<number[]>;
  categoryLevel$: Observable<any>;
  products$: Observable<Product>;
  pagination$: Observable<any>;
  isFilterOn$: Observable<Boolean>;
  isBrandOpen = false;
  isCategoryOpen = true;
  screenwidth;
  isMobile;
  rootTaxonomyId: any;
  rootTaxonomyIdSubs$: Subscription;
  layoutState$: Observable<LayoutState>;

  @ViewChild('autoShownModal') autoShownModal: ModalDirective;
  isModalShown = false;

  constructor(
    private store: Store<AppState>,
    private actions: ProductActions,
    private searchActions: SearchActions,
    @Inject(PLATFORM_ID) private platformId: any,
  ) {
    this.store.dispatch(this.actions.getAllTaxonomies());
    this.taxonomies$ = this.store.select(getTaxonomies);
    this.brands$ = this.store.select(getTaxonomies);
    this.selectedTaxonIds$ = this.store.select(getSelectedTaxonIds);
    this.products$ = this.store.select(getProductsByKeyword);
    this.pagination$ = this.store.select(getPaginationData);
    this.isFilterOn$ = this.store.select(searchFilterStatus);
    this.rootTaxonomyIdSubs$ = this.store.select(rootTaxonomyId).subscribe(id => this.rootTaxonomyId = id);
    this.layoutState$ = this.store.select(getlayoutStateJS);
  }

  showModal(): void {
    this.isModalShown = true;
  }

  calculateInnerWidth() {
    if (this.screenwidth <= 1000) {
      this.isMobile = this.screenwidth;
    }
  }

  hideModal(): void {
    this.autoShownModal.hide();
  }

  onHidden(): void {
    this.isModalShown = false;
  }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.screenwidth = window.innerWidth;
    }
    this.calculateInnerWidth();
  }

  OnCategeorySelected(category) {
    this.store.dispatch(this.searchActions.getChildTaxons(this.rootTaxonomyId, category.id));
    this.taxonomies$ = this.store.select(getChildTaxons)
    this.categoryLevel$ = this.store.select(categeoryLevel)
    // ToDo: Here Brands are hardcoded For now.
    this.store.dispatch(this.searchActions.getTaxonomiesByName('Brands', category.name));
    this.brands$ = this.store.select(taxonomiByName)
    this.store.dispatch(this.searchActions.setSearchFilterOn())
  }

  showAll() {
    this.store.dispatch(this.searchActions.setSearchFilterOff())
  }

  isOpenChangeaccourdian() {
    this.isCategoryOpen = !this.isCategoryOpen;
  }

  ngOnDestroy() {
    this.rootTaxonomyIdSubs$.unsubscribe();
  }
}
