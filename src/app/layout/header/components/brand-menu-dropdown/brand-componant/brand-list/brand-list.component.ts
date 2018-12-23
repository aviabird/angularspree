import { Component, OnInit, Input, ChangeDetectionStrategy, Inject, PLATFORM_ID } from '@angular/core';
import { Brand } from '../../../../../../core/models/brand';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-brand-list',
  templateUrl: './brand-list.component.html',
  styleUrls: ['./brand-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BrandListComponent implements OnInit {
  @Input() brand: Brand;
  imageUrl = 'assets/default/image-placeholder.svg'

  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  ngOnInit() {
  }

  getBrandImageUrl(url) {
    return url || this.imageUrl;
  }

  getBrandName(brandName: string) {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('keyword', brandName);
    }
  }
}
