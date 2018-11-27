import { Image } from './../../../../core/models/image';
import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { NguCarouselConfig } from '@ngu/carousel';

@Component({
  selector: 'app-image-container',
  templateUrl: './product-images.component.html',
  styleUrls: ['./product-images.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductImagesComponent implements OnInit {
  @Input() images: Image[] = null;
  @Input() selectedImage: Image = null;
  @Input() isMobile;
  public carouselTileConfig: NguCarouselConfig = {
    grid: { xs: 1, sm: 1, md: 1, lg: 1, all: 0 },
    slide: 1,
    speed: 500,
    point: {
      visible: true
    },
    touch: true,
    velocity: 0,
    loop: true,
    interval: { timing: 5000 },
    animation: 'lazy',
    custom: 'banner'
  };

  constructor() { }

  ngOnInit() {
  }


  getProductImageUrl(url) {
    return url;
  }

  onMouseOver(image: Image) {
    this.selectedImage = image;
  }
}
