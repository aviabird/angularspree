import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-lp-brands',
  templateUrl: './lp-brands.component.html',
  styleUrls: ['./lp-brands.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LpBrandsComponent implements OnInit {
  @Input() brands;
  image = 'assets/default/no-image-available.jpg'
  constructor() { }

  ngOnInit() {
  }

  getBrandImageUrl(url) {
    if (url) {
      return url;
    } else { return this.image }
  }
}
