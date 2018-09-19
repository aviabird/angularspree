import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Brand } from '../../../core/models/brand';

@Component({
  selector: 'app-lp-brands',
  templateUrl: './lp-brands.component.html',
  styleUrls: ['./lp-brands.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LpBrandsComponent implements OnInit {
  @Input() brands: Array<Brand>;
  imageUrl = 'assets/default/no-image-available.jpg'

  constructor() { }

  ngOnInit() {
  }

  getBrandImageUrl(url) {
    return url || this.imageUrl;
  }
}
