import { environment } from './../../../../../../../../environments/environment';
import { Component, OnInit, Input, OnChanges, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-brand-logo',
  templateUrl: './brand-logo.component.html',
  styleUrls: ['./brand-logo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BrandLogoComponent implements OnInit {
  @Input() brandList;

  // To do : Finding alternateway to show image.
  image = 'assets/default/image-placeholder.svg'

  constructor() { }

  ngOnInit() { }

  getBrandImageUrl(url) {
    if (url) {
      return url;
    } else { return this.image }
  }
}
