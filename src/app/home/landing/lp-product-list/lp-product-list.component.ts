import { PlItemComponent } from './pl-item/pl-item.component';
import { DragScrollDirective } from 'ngx-drag-scroll';
import { environment } from './../../../../environments/environment';
import { Component, OnInit, Input, ViewChild, Renderer2, ElementRef } from '@angular/core';

@Component({
  selector: 'app-lp-product-list',
  templateUrl: './lp-product-list.component.html',
  styleUrls: ['./lp-product-list.component.scss']
})
export class LpProductListComponent implements OnInit {

  @Input() products;
  @ViewChild('nav', { read: DragScrollDirective }) ds: DragScrollDirective;

  constructor() {

  }

  ngOnInit() {
  }

  getProductImageUrl(url) {
    return environment.apiEndpoint + url;
  }

  moveLeft() { this.ds.moveLeft() }
  moveRight() { this.ds.moveRight() }
}
