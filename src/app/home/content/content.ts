import { Product } from './../../core/models/product';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-content',
  template: `
   <div *ngIf='paginationData.total_count > 0'>
    <app-content-header [layoutState]="layoutState" (toggleSize)="toggleSize($event)"
     [paginationInfo]="paginationData" [fillterList]="fillterList"></app-content-header>
    <app-product-list [(toggleLayout)]='toggleLayout'
     [products]='productsList' [paginationData]='paginationData' [taxonIds]="taxonIds"></app-product-list>
    </div>
  `,
})
export class ContentComponent implements OnInit {
  @Input() productsList;
  @Input() paginationData;
  @Input() taxonIds;
  @Input() fillterList;
  @Input() layoutState;
  toggleLayout = { size: 'COZY' };

  constructor() { }

  ngOnInit() {
  }

  toggleSize(layoutInfo) {
    this.toggleLayout = layoutInfo;
  }

}
