import { environment } from './../../../../environments/environment';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-lp-promo',
  templateUrl: './lp-promo.component.html',
  styleUrls: ['./lp-promo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LpPromoComponent implements OnInit {
  promo_banners = environment.config.promo_banner;
  constructor() { }

  ngOnInit() {
  }

}
