import { environment } from './../../../../../../../environments/environment';
import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-brand-list',
  templateUrl: './brand-list.component.html',
  styleUrls: ['./brand-list.component.scss']
})
export class BrandListComponent implements OnInit {
  @Input() taxons;
  // To do : Finding alternateway to show image.
  image = '../../../../../../../assets/default/no-image-available.png'
  constructor() { }
  ngOnInit() {
  }

  getBrandImageUrl(url) {
    return url || this.image;
  }
}
