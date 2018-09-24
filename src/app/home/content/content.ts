import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-content',
  // template: `
  //  <div *ngIf='paginationData.total_count > 0'>
  //   <app-content-header
  //    [paginationInfo]="paginationData" [fillterList]="fillterList"></app-content-header>
  //   <app-product-list
  //    [products]='productsList' [paginationData]='paginationData'></app-product-list>
  //   </div>`,
  template: `
  <div *ngIf='true'>
   <app-content-header></app-content-header>
   <app-product-list
    [products]='productsList'></app-product-list>
   </div>`,
})
export class ContentComponent implements OnInit {
  @Input() productsList;
  // @Input() paginationData;
  // @Input() fillterList;

  constructor() { }

  ngOnInit() {
  }
}
