import { Component, OnInit, Input, EventEmitter, Output, OnChanges, ViewChild } from '@angular/core';

import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
import { SearchActions } from '../reducers/search.actions';
import { Store } from '@ngrx/store';
import { AppState } from '../../interfaces';
import { ModalDirective } from 'ngx-bootstrap/modal';
@Component({
  selector: 'app-filter-mobile-menu',
  templateUrl: './filter-mobile-menu.component.html',
  styleUrls: ['./filter-mobile-menu.component.scss'],
  animations: [
    trigger('popOverState', [
      state('show', style({
        left: -100 + 'vw'
      })),
      state('hide', style({
        left: 0
      })),
      transition('show => hide', animate('100ms ease-out')),
      transition('hide => show', animate('200ms ease-in'))
    ]),
    trigger('subCatgory', [
      state('show', style({
        left: -200 + 'vw'
      })),
      state('hide', style({
        left: -100
      })),
      transition('show => hide', animate('100ms ease-out')),
      transition('hide => show', animate('200ms ease-in'))
    ])

  ]
})
export class FilterMobileMenuComponent implements OnInit {

  @Input() fillterList;
  @Input() isScrolled;

  @Input() screenwidth;
  @Input() subselectedItem;
  @Output() fltermodelstate = new EventEmitter<Object>();
  @Output() selectedItemEmit = new EventEmitter<Object>();
  @Input() childselectedItem;
  @Output() childselectedItememit = new EventEmitter<Object>();
  subChild: any;
  dropdownWidth: any;
  menuTaxons: any;
  autoclose: boolean;
  queryParams: any;
  showParrent = false;
  showChild = false;
  backBtnShow = false;
  constructor(
    private searchActions: SearchActions,
    private store: Store<AppState>) { }
  showCategory(taxon) {
    this.menuTaxons = taxon.taxons;
  }
  get stateName() {
    return this.showParrent ? 'show' : 'hide'
  }

  get stateName1() {
    return this.showChild ? 'show' : 'hide'
  }
  // tslint:disable-next-line:member-ordering
  @ViewChild(ModalDirective) modal: ModalDirective;


  showSubCategory(i) {
    this.showChild = !this.showChild;
    this.subChild = this.menuTaxons.taxons[i];
  }
  parrentBack() {
    this.showParrent = !this.showParrent;
  }
  childBack() {
    this.showChild = !this.showChild;
  }
  parrentTaxon(event, newValue) {
    // this.selectedItem = newValue;
    this.selectedItemEmit.emit(newValue);
    this.fltermodelstate.emit(false);

  }
  childTaxons(event, newValue) {
    this.childselectedItememit.emit(newValue);
    this.fltermodelstate.emit(false);
  }
  ngOnInit() {

  }
  catgeoryFilter() {
    const search = new URLSearchParams();
    if ('page' in this.queryParams) {
      search.set('page', this.queryParams.page);
    }
    search.set('id', this.queryParams.id);
    this.store.dispatch(this.searchActions.getProductsByTaxon(search.toString()));
  }
}
