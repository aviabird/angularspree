import { environment } from './../../../../../environments/environment';
import { Product } from './../../../../core/models/product';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-inner-product',
  templateUrl: './inner-product.component.html',
  styleUrls: ['./inner-product.component.scss']
})
export class InnerIproduct implements OnInit {

  @Input() product: Product;
  constructor() {
  }

  ngOnInit() {
  }

  getProductImageUrl(url) {
    return environment.apiEndpoint + url;
  }
}
