import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-brand-list',
  templateUrl: './brand-list.component.html',
  styleUrls: ['./brand-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BrandListComponent implements OnInit {
  @Input() taxons;
  // To do : Finding alternateway to show image.
  image = 'assets/default/no-image-available.jpg'
  constructor() { }
  ngOnInit() {
  }

  getBrandImageUrl(url) {
    return url || this.image;
  }
}
