import { Component, OnInit, Input, ChangeDetectionStrategy, Inject, PLATFORM_ID } from '@angular/core';
import { Brand } from '../../../core/models/brand';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-lp-brands',
  templateUrl: './lp-brands.component.html',
  styleUrls: ['./lp-brands.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LpBrandsComponent implements OnInit {
  @Input() brands: Array<Brand>;
  imageUrl = 'assets/default/image-placeholder.svg'

  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  ngOnInit() {
  }

  getBrandImageUrl(url) {
    return url || this.imageUrl;
  }

  setBrandName(brandName: string) {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('keyword', brandName);
    }
  }
}
