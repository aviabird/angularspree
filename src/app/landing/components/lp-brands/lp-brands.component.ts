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

  public getBrandImageUrl(url) {
    return url ? url : this.image;
  }
}
