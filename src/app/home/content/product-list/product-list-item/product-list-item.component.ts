import { Product } from './../../../../core/models/product';
import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'app-product-list-item',
  templateUrl: './product-list-item.component.html',
  styleUrls: ['./product-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductListItemComponent implements OnInit {
  @Input() product: Product;
  appConfig = environment.config;
  currency = environment.config.currency_symbol;
  noImageUrl = 'assets/default/image-placeholder.svg';

  constructor() { }

  ngOnInit() {
  }

  getProductImageUrl(product: Product) {
    return product.images[0] ? product.images[0].product_url : this.noImageUrl;
  }
}
