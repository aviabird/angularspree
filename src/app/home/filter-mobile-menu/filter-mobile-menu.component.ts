import { Component, OnInit, Input } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
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
  subChild: any;
  dropdownWidth: any;
  menuTaxons: any;
  autoclose: boolean;
  queryParams: any;
  showParrent = false;
  showChild = false;
  backBtnShow = false;
  selectedItem
  constructor() { }
  showCategory(taxon) {
    this.menuTaxons = taxon.taxons;
  }
  get stateName() {
    return this.showParrent ? 'show' : 'hide'
  }

  get stateName1() {
    return this.showChild ? 'show' : 'hide'
  }

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
  listClick(event, newValue) {
    this.selectedItem = newValue; 
  }
  ngOnInit() {

  }
}
