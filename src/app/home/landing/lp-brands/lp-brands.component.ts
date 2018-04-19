import { environment } from './../../../../environments/environment.mock';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-lp-brands',
  templateUrl: './lp-brands.component.html',
  styleUrls: ['./lp-brands.component.scss']
})
export class LpBrandsComponent implements OnInit {
  @Input() products;
  constructor() { }

  ngOnInit() {
  }

  getProductImageUrl(url) {
    return environment.API_ENDPOINT + url;
  }

}
