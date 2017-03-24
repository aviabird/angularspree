import { Image } from './../../../../core/models/image';
import { environment } from './../../../../../environments/environment';
import { Product } from './../../../../core/models/product';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-image-container',
  templateUrl: './product-images.component.html',
  styleUrls: ['./product-images.component.scss']
})
export class ProductImagesComponent implements OnInit {
  @Input() images: Image[] = null;
  @Input() selectedImage: Image = null;
  constructor() { }

  ngOnInit() { }

  getProductImageUrl(url) {
    return environment.API_ENDPOINT + url;
  }

  onMouseOver(image: Image) {
    this.selectedImage = image;
  }
}
