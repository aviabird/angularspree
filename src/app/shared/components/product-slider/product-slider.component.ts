import { DragScrollDirective } from 'ngx-drag-scroll';
import { environment } from './../../../../environments/environment';
import { Component, OnInit, Input, ViewChild, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-product-slider',
  templateUrl: './product-slider.component.html',
  styleUrls: ['./product-slider.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductSliderComponent implements OnInit {
  @Input() productlist;
  @ViewChild('nav', { read: DragScrollDirective }) ds: DragScrollDirective;

  constructor() {
  }

  ngOnInit() {
  }

  moveLeft() {
    this.ds.moveLeft();
  }

  moveRight() {
    this.ds.moveRight();
  }
}
