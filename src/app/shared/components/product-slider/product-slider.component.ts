import { DragScrollDirective } from 'ngx-drag-scroll';
import { environment } from './../../../../environments/environment';
import { Component, OnInit, Input, ViewChild, ChangeDetectionStrategy, OnChanges } from '@angular/core';

@Component({
  selector: 'app-product-slider',
  templateUrl: './product-slider.component.html',
  styleUrls: ['./product-slider.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductSlider implements OnInit {
  @Input() productlist;
  productlist2: any;
  constructor() {
  }
  
  ngOnInit() {
    this.productlist2 = this.productlist;
  }

  @ViewChild('nav', { read: DragScrollDirective }) ds: DragScrollDirective;

  moveLeft() {
    this.ds.moveLeft();
  }

  moveRight() {
    this.ds.moveRight();
  }
}
