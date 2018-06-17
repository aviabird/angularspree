import { environment } from './../../../../../environments/environment';
import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-lp-tr-item',
  templateUrl: './lp-tr-item.component.html',
  styleUrls: ['./lp-tr-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LpTrItemComponent implements OnInit {

  @Input () product;
  constructor() { }

  ngOnInit() {
  }
  getProductImageUrl(url) {
    return url;
  }
}
