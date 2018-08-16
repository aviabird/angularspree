import { Product } from './../../../../core/models/product';
import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-pl-item',
  templateUrl: './pl-item.component.html',
  styleUrls: ['./pl-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlItemComponent implements OnInit {
  @Input() product: Product;
  constructor() { }

  ngOnInit() {
  }

  getProductImageUrl(url) {
    return url;
  }
}
