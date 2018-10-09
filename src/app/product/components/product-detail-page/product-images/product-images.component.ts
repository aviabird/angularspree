import { Image } from './../../../../core/models/image';
import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { NguCarouselConfig } from '@ngu/carousel';

const img1 = require('../../../../../assets/thumbnail.jpg');
const img2 = require('../../../../../assets/thumbnail2.jpg');

@Component({
  selector: 'app-image-container',
  templateUrl: './product-images.component.html',
  styleUrls: ['./product-images.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductImagesComponent implements OnInit {
  imageSource1 = img1;
  imageSource2 = img2;
  @Input() images: Image[] = null;
  @Input() selectedImage: Image = null;
  zoomOptions = {
    peepView: {
      borderColor: '#fff',
      borderWidth: '2px',
      borderStyle: 'solid',
      cursor: 'zoom-in',
    },
    settings: {
      zoom: 4,
    }
  };
  @Input() isMobile;
  public carouselOne: NguCarouselConfig;
  constructor() { }

  ngOnInit() {
    this.carouselOne = {
      grid: { xs: 1, sm: 1, md: 1, lg: 1, all: 0 },
      slide: 1,
      speed: 400,
      point: {
        visible: true,
      },
      load: 2,
      touch: true,
      loop: true,
      custom: 'banner'
    }
  }


  getProductImageUrl(url) {
    return url;
  }

  onMouseOver(image: Image) {
    this.selectedImage = image;
  }
}
