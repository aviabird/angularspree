import { Product } from './../../core/models/product';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-content',
  template: `
    <app-content-header (toggleSize)="toggleSize($event)"
     [productsCount]="productsList.count"
     [productsTotal_count]="productsList.total_count"></app-content-header>
   
    <app-product-list [(toggleLayout)]='toggleLayout' [products]='productsList' [taxonIds]="taxonIds"></app-product-list>
  `,
  //   styleUrls: ['./content-header.component.scss'] <app-filter-summary></app-filter-summary>
   // <app-customize></app-customize>
})
export class ContentComponent implements OnInit {
  @Input() productsList;
  @Input() taxonIds;
  toggleLayout = { size: 'COZY' };

  constructor() { }

  ngOnInit() {
  }

  toggleSize(layoutInfo) {
    this.toggleLayout = layoutInfo;
  }

}
