import { environment } from './../../../../../environments/environment';
import { Product } from './../../../../core/models/product';
import { Component, OnInit, Input, ChangeDetectionStrategy, OnChanges } from '@angular/core';

@Component({
  selector: 'app-inner-product',
  templateUrl: './inner-product.component.html',
  styleUrls: ['./inner-product.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InnerIproductComponent implements OnInit {
  @Input() product: Product;
  @Input() showRating: boolean;
  noImageUrl = 'assets/default/image-placeholder.svg'
  constructor() {
  }

  ngOnInit() {
  }
  get imageUrl() {
    return this.product.images[0] ? this.product.images[0].product_url : this.noImageUrl
  }
}
