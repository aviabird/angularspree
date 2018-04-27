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

  taxon = APP_DATA;
  constructor() { }
  ngOnInit() {
  }
  get brand() {
    return this.taxon[this.taxonName];
  }
}
