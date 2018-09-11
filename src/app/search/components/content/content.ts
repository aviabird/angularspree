import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-content',
  template: `
   <div *ngIf='paginationData.total_count > 0'>
    <app-content-header
     [paginationInfo]="paginationData" [layoutState]="layoutState" [fillterList]="fillterList"></app-content-header>
    <app-product-list
     [products]='productsList' [paginationData]='paginationData'></app-product-list>
    </div>`,
})
export class ContentComponent implements OnInit {
  @Input() productsList;
  @Input() paginationData;
  @Input() fillterList;
  @Input() layoutState;

  constructor() { }

  ngOnInit() {
  }
}
