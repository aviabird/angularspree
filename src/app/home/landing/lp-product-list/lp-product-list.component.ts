import { PlItemComponent } from './pl-item/pl-item.component';
import { DragScrollDirective } from 'ngx-drag-scroll';
import { environment } from './../../../../environments/environment';
import { Component, OnInit, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-lp-product-list',
  templateUrl: './lp-product-list.component.html',
  styleUrls: ['./lp-product-list.component.scss']
})
export class LpProductListComponent implements OnInit {

  @Input() productsByTaxons;
  @Input() dealsType;
  
  @ViewChild('nav', { read: DragScrollDirective }) ds: DragScrollDirective;

  constructor() {

  }

  ngOnInit() {
  }

  moveLeft() { this.ds.moveLeft() }
  moveRight() { this.ds.moveRight() }
}
