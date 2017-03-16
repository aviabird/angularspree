import { environment } from './../../../../../environments/environment';
import { Product } from './../../../../core/models/product';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-image-container',
  templateUrl: './product-images.component.html',
  styleUrls: ['./product-images.component.scss']
})
export class ProductImagesComponent implements OnInit {
  @Input() product: Product;
  image: any;
  constructor() {
  }

  ngOnInit() {
  }

  getProductImageUrl(url) {
    return environment.API_ENDPOINT + url;
  }
}
