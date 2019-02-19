import { environment } from './../../../../../../../environments/environment';
import { Product } from './../../../../../../core/models/product';
import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy
} from '@angular/core';

@Component({
  selector: 'app-search-result-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './search-result-item.component.html',
  styleUrls: ['./search-result-item.component.scss']
})
export class SearchResultItemComponent implements OnInit {
  @Input() product: Product;
  noImageUrl = '/assets/default/image-placeholder.svg';
  loaderImageUrl = '/assets/default/loader.svg';
  currency = environment.config.currency_symbol;
  imageLoaded = false;

  constructor() {}

  ngOnInit() {}

  getProductImageUrl(format = '.jpg') {
    if (this.defaultImage) {
      return this.defaultImage.product_url.replace(/.\jpg/, format);
    } else {
      return this.noImageUrl;
    }
  }

  imageLoadedSuccess(event: boolean) {
    this.imageLoaded = event;
  }

  get discount() {
    return Math.ceil(
      +this.product.max_retail_price.amount - +this.product.selling_price.amount
    );
  }

  get discountPercent() {
    return `(${Math.ceil(
      (this.discount / +this.product.max_retail_price.amount) * 100
    )}% OFF)`;
  }

  get reviewCount() {
    const count = this.product.rating_summary.review_count;
    return count > 0 ? `${count} reviews` : '';
  }

  get defaultImage() {
    return this.product.images[0];
  }
}
