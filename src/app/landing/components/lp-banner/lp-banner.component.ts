import { environment } from './../../../../environments/environment';
import { Component, OnInit, ChangeDetectionStrategy, ViewChild } from '@angular/core';
import { NguCarouselStore, NguCarouselConfig } from '@ngu/carousel';

@Component({
  selector: 'app-lp-banner',
  templateUrl: './lp-banner.component.html',
  styleUrls: ['./lp-banner.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LpBannerComponent implements OnInit {
  public bannerItems = environment.config.landing_page_banner;
  public carouselBanner: NguCarouselConfig;
  @ViewChild('landingBanners') landingBanners: NguCarouselStore;

  constructor() {}

  ngOnInit() {
    this.carouselBanner = {
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
    };
  }

  onMoveBanner(store: NguCarouselStore) {
    this.landingBanners.currentSlide = store.currentSlide;
  }
}
