import { APP_DATA } from './../../../shared/data/app-data';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lp-promo',
  templateUrl: './lp-promo.component.html',
  styleUrls: ['./lp-promo.component.scss']
})
export class LpPromoComponent implements OnInit {
  promo_banners = APP_DATA.promo_banner;
  constructor() { }

  ngOnInit() {
  }

}
