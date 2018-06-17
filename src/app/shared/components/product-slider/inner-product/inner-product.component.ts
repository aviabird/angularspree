import { environment } from './../../../../../environments/environment';
import { Product } from './../../../../core/models/product';
import { Component, OnInit, Input, ChangeDetectionStrategy, OnChanges } from '@angular/core';

@Component({
  selector: 'app-inner-product',
  templateUrl: './inner-product.component.html',
  styleUrls: ['./inner-product.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InnerIproduct implements OnInit {

  @Input() product: Product;
  constructor() {
  }

  ngOnInit() {
  }

  getProductImageUrl() {
    return this.product.master.images[0].product_url;
  }
}
