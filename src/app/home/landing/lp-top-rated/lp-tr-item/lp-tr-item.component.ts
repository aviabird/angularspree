import { environment } from './../../../../../environments/environment';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-lp-tr-item',
  templateUrl: './lp-tr-item.component.html',
  styleUrls: ['./lp-tr-item.component.scss']
})
export class LpTrItemComponent implements OnInit {

  @Input () product;
  constructor() { }

  ngOnInit() {
  }
  getProductImageUrl(url) {
    return environment.apiEndpoint + url;
  }
}
