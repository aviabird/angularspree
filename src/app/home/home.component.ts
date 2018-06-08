import { ProductService } from './../core/services/product.service';
import { SearchActions } from './reducers/search.actions';
import { getSelectedTaxonIds, getProductsByKeyword, getChildTaxons, categeoryLevel, taxonomiByName } from './reducers/selectors';
import { Taxonomy } from './../core/models/taxonomy';
import { environment } from './../../environments/environment';
import { ProductActions } from './../product/actions/product-actions';
import { AppState } from './../interfaces';
import { getProducts, getTaxonomies, showAllProducts } from './../product/reducers/selectors';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Component, OnInit, ViewChild } from '@angular/core';
import { TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { Directive, Renderer2, ElementRef } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { Product } from '../core/models/product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  // products$: Observable<any>;
  taxonomies$: Observable<any>;
  brands$: Observable<any>;
  selectedTaxonIds$: Observable<number[]>;
  categoryLevel$: Observable<any>;
  products: any;
  isProducts = false;
  isFilterOn = false;
  isBrandOpen = false;
  isCategoryOpen = true;
  fillterList: any;

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
    this.store.select(getProductsByKeyword)
      .subscribe(data => {
        this.products = data
        if (this.products.count) { this.isProducts = true } else { this.isProducts = false }
      })
    this.store.select(getTaxonomies)
      .subscribe(data => {
        this.fillterList = data;
      })
  }

  @ViewChild('autoShownModal') autoShownModal: ModalDirective;
  isModalShown: boolean = false;

  showModal(): void {
    this.isModalShown = true;
  }

  hideModal(): void {
    this.autoShownModal.hide();
  }

  onHidden(): void {
    this.isModalShown = false;
  }
  ngOnInit() {
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
