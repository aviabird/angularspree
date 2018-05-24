import { Image } from './../../../../core/models/image';
import { environment } from './../../../../../environments/environment';
import { Product } from './../../../../core/models/product';
import { Component, OnInit, Input } from '@angular/core';
import { ZoomableDirective } from 'ng2-zoomable';

const img1 = require('../../../../../assets/thumbnail.jpg');
const img2 = require('../../../../../assets/thumbnail2.jpg');

@Component({
  selector: 'app-image-container',
  templateUrl: './product-images.component.html',
  styleUrls: ['./product-images.component.scss']
})
export class ProductImagesComponent implements OnInit {
  imageSource1 = img1;
  imageSource2 = img2;
  @Input() images: Image[] = null;
  @Input() selectedImage: Image = null;
  constructor() { }

  ngOnInit() { }

  getProductImageUrl(url) {
    return environment.apiEndpoint + url;
  }

  onMouseOver(image: Image) {
    this.selectedImage = image;
  }
}
