import { NguCarouselConfig } from '@ngu/carousel';
import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-product-slider',
  templateUrl: './product-slider.component.html',
  styleUrls: ['./product-slider.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductSliderComponent implements OnInit {
  @Input() productsList = new Array(10);
  public carouselTileConfig: NguCarouselConfig = {
    grid: { xs: 1, sm: 1, md: 2, lg: 5, all: 0 },
    slide: 2,
    speed: 400,
    animation: 'lazy',
    point: {
      visible: false
    },
    load: 2,
    touch: true,
    velocity: 0,
    easing: 'ease-in',
    custom: 'banner'
  }
  @Input() showRating: boolean;
  constructor() {
  }

  ngOnInit() {
  }

  moveLeft() {
  }

  moveRight() {
  }
}
