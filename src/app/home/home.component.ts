import { ProductService } from './../core/services/product.service';
import { SearchActions } from './reducers/search.actions';
import {
  getSelectedTaxonIds,
  getProductsByKeyword,
  getChildTaxons,
  categeoryLevel,
  taxonomiByName,
  getPaginationData
} from './reducers/selectors';
import { ProductActions } from './../product/actions/product-actions';
import { AppState } from './../interfaces';
import { getTaxonomies } from './../product/reducers/selectors';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Component, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { Product } from '../core/models/product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {
  // products$: Observable<any>;
  taxonomies$: Observable<any>;
  brands$: Observable<any>;
  selectedTaxonIds$: Observable<number[]>;
  categoryLevel$: Observable<any>;
  products$: Observable<Product>;
  pagination$: Observable<any>;
  isFilterOn = false;
  isBrandOpen = false;
  isCategoryOpen = true;
  screenwidth;
  devicewidth;
  constructor(
    private store: Store<AppState>,
    private actions: ProductActions,
    private searchActions: SearchActions,
    private productService: ProductService) {
    // Get all products for the product list component
    this.store.dispatch(this.actions.getAllProducts(1));
    this.store.dispatch(this.actions.getAllTaxonomies());
    // this.products$ = this.store.select(getProducts);
    this.taxonomies$ = this.store.select(getTaxonomies);
    this.brands$ = this.store.select(getTaxonomies);
    this.selectedTaxonIds$ = this.store.select(getSelectedTaxonIds);
    this.products$ = this.store.select(getProductsByKeyword);
    this.pagination$ = this.store.select(getPaginationData);
  }

  // tslint:disable-next-line:member-ordering
  @ViewChild('autoShownModal') autoShownModal: ModalDirective;
  // tslint:disable-next-line:member-ordering
  isModalShown = false;

  showModal(): void {
    this.isModalShown = true;
  }
  calculateInnerWidth() {
    if (this.screenwidth <= 1000) {
      this.devicewidth = this.screenwidth;
    }
  }
  hideModal(): void {
    this.autoShownModal.hide();
  }

  onHidden(): void {
    this.isModalShown = false;
  }
  ngOnInit() {
    this.screenwidth = window.innerWidth;
    this.calculateInnerWidth();
  }

  OnCategeorySelected(category) {
    // TODO: Here taxonomies_id is hardcoded for now.
    this.store.dispatch(this.searchActions.getChildTaxons('5', category.id));
    this.taxonomies$ = this.store.select(getChildTaxons)
    this.categoryLevel$ = this.store.select(categeoryLevel)
    // ToDo: Here Brands are hardcoded For now.
    this.store.dispatch(this.searchActions.getTaxonomiesByName('Brands', category.name));
    this.brands$ = this.store.select(taxonomiByName)
    this.isFilterOn = true
  }
  showAll() {
    this.isFilterOn = false
  }

  isOpenChangeaccourdian() {
    this.isCategoryOpen = !this.isCategoryOpen;
  }
}
