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

  constructor() { }

  ngOnInit() {
  }

  getProductImageUrl(url) {
    return url;
  }
}
