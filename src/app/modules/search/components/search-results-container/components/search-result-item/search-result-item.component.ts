import { environment } from './../../../../../../../environments/environment';
import { Product } from './../../../../../../core/models/product';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-search-result-item',
  templateUrl: './search-result-item.component.html',
  styleUrls: ['./search-result-item.component.scss']
})
export class SearchResultItemComponent implements OnInit {
  @Input() product: Product;
  noImageUrl = '/assets/default/image-placeholder.svg';
  appConfig = environment.config;
  currency = environment.config.currency_symbol;

  constructor() { }

  ngOnInit() {
  }

  getProductImageUrl(product: Product) {
    return product.images[0] ? product.images[0].product_url : this.noImageUrl;
  }
}
