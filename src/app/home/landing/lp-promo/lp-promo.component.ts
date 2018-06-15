import { environment } from './../../../../environments/environment';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lp-promo',
  templateUrl: './lp-promo.component.html',
  styleUrls: ['./lp-promo.component.scss']
})
export class LpPromoComponent implements OnInit {
  promo_banners = environment.config.promo_banner;
  constructor() { }

  ngOnInit() {
  }

}
