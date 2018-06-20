import { environment } from './../../../environments/environment';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-lp-banner',
  templateUrl: './lp-banner.component.html',
  styleUrls: ['./lp-banner.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LpBannerComponent implements OnInit {
  banners = environment.config.landing_page_banner;
  constructor() { }

  ngOnInit() {
  }

}
