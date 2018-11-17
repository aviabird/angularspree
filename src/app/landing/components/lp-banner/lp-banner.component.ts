import { environment } from './../../../../environments/environment';
import { Component, OnInit, ChangeDetectionStrategy, ViewChild, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { NguCarouselConfig } from '@ngu/carousel';

@Component({
  selector: 'app-lp-banner',
  templateUrl: './lp-banner.component.html',
  styleUrls: ['./lp-banner.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LpBannerComponent implements OnInit, AfterViewInit {
  public bannerItems = environment.config.landing_page_banner;
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

  ngOnInit() {}

  ngAfterViewInit() {
  }
}
