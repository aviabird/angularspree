import { APP_DATA } from './../../../shared/data/app-data';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lp-banner',
  templateUrl: './lp-banner.component.html',
  styleUrls: ['./lp-banner.component.scss']
})
export class LpBannerComponent implements OnInit {
  banners = APP_DATA.landing_page_banner;
  constructor() { }

  ngOnInit() {
  }

}
