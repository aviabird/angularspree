import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Brand } from '../../../../../../core/models/brand';

@Component({
  selector: 'app-brand-list',
  templateUrl: './brand-list.component.html',
  styleUrls: ['./brand-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BrandListComponent implements OnInit {
  @Input() brand: Brand;
  imageUrl = 'assets/default/no-image-available.jpg'

  constructor() { }

  ngOnInit() {
  }

  getBrandImageUrl(url) {
    return url || this.imageUrl;
  }
}
