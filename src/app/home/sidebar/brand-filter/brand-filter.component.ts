import { Component, OnInit, Input, PLATFORM_ID, Inject } from '@angular/core';
import { Brand } from '../../../core/models/brand';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-brand-filter',
  templateUrl: './brand-filter.component.html',
  styleUrls: ['./brand-filter.component.scss']
})
export class BrandFilterComponent implements OnInit {
  @Input() brandsList: Array<Brand>;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object
  ) { }

  ngOnInit() {
  }

  brandFilter(brandName: string) {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('keyword', brandName);
    }
  }

}
