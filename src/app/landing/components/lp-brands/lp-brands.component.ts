import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-lp-brands',
  templateUrl: './lp-brands.component.html',
  styleUrls: ['./lp-brands.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LpBrandsComponent implements OnInit {
  @Input() brands;
  // To do : Finding alternate way to show image.
  image = '../../../../../../../assets/default/no-image-available.png'
  constructor() { }

  ngOnInit() {
  }

  getBrandImageUrl(url) {
    if (url) {
      return url;
    } else { return this.image }
  }
}
