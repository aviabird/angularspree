import { Image } from './../../../../core/models/image';
import { environment } from './../../../../../environments/environment';
import { Product } from './../../../../core/models/product';
import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { NguCarousel } from '@ngu/carousel';

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
  public carouselOne: NguCarousel;
  constructor() { }

  ngOnInit() {
    this.carouselOne = {
      grid: { xs: 1, sm: 1, md: 1, lg: 1, all: 0 },
      slide: 1,
      speed: 400,
      interval: 4000,
      point: {
        visible: true,
        pointStyles: `
          .ngucarouselPoint {
            list-style-type: none;
            padding: 3px;
            white-space: nowrap;
            overflow: auto;
            position: relative;
            bottom: 27px;
            left: 0;
            box-sizing: border-box;
            background-color: white;
            margin: 0 auto -28px;
            align-self: center;
            width: fit-content;
            border-radius: 5px 5px 0 0;
          }
          .ngucarouselPoint li {
            display: inline-block;
            border-radius: 999px;
            background-color: rgba(0, 0, 255, 0.55);
            padding: 5px;
            margin: 0 3px;
            transition: .4s ease all;
          }
          .ngucarouselPoint li.active {
              background-color: white;
              border: 1px solid rgba(0, 0, 255, 0.55);
              width: 10px;
          }
        `
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
