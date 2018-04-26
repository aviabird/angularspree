import { APP_DATA } from './../../../../../../shared/data/app-data';
import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-categories-details',
  templateUrl: './categories-details.component.html',
  styleUrls: ['./categories-details.component.scss']
})
export class CategoriesDetailsComponent implements OnInit {
  @Input() taxons;
  @Input() taxonName;
  @Input() BTaxon;

  catgeroy_wise_brands_logos = APP_DATA.catgeroy_wise_brands_logo;
  taxon = APP_DATA;
  constructor() { }
  ngOnInit() {
  }
  get brand() {
    return this.taxon[this.taxonName];
  }
}
