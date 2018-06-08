import { environment } from './../../../../../../../environments/environment';
import { APP_DATA } from './../../../../../../shared/data/app-data';
import { Component, OnInit, Input, OnChanges, ViewEncapsulation, Output, EventEmitter } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-categories-details',
  templateUrl: './categories-details.component.html',
  styleUrls: ['./categories-details.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: [
    trigger('popOverState', [
      state('show', style({
        left: -50 + '%'
      })),
      state('hide', style({
        left: 0
      })),
      transition('show => hide', animate('100ms ease-out')),
      transition('hide => show', animate('200ms ease-in'))
    ])
  ]
})
export class CategoriesDetailsComponent implements OnInit {
  @Input() taxons;
  @Input() taxonName;
  @Input() BTaxon;
  @Input() screenwidth;
  @Input() taxonImageLink;
  menuTaxons: any;
  @Output() onSubCatClicked: EventEmitter<boolean> = new EventEmitter<boolean>();

  show = false;
  get stateName() {
    return this.show ? 'show' : 'hide'
  }

  taxon = APP_DATA;
  constructor() { }

  showCategoryonclick(taxon) {
    this.show = !this.show;
    this.menuTaxons = taxon.taxons;
    this.onSubCatClicked.emit(true);
  }
  backtolist() {
    this.show = !this.show;
    this.onSubCatClicked.emit(false);
  }
  ngOnInit() {

  }
  get brand() {
    return this.taxonImageLink;
  }

  getProductImageUrl() {
    return environment.apiEndpoint + this.taxonImageLink;
  }
}
