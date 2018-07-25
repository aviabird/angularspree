import { environment } from './../../../environments/environment';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { NguCarousel } from '@ngu/carousel';

@Component({
  selector: 'app-lp-banner',
  templateUrl: './lp-banner.component.html',
  styleUrls: ['./lp-banner.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LpBannerComponent implements OnInit {
  banners = environment.config.landing_page_banner;
  public carouselOne: NguCarousel;
  constructor() { }

  ngOnInit() {
    this.carouselOne = {
      grid: {xs: 1, sm: 1, md: 1, lg: 1, all: 0},
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

}
