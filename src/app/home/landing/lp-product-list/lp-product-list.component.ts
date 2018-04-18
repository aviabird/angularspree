import { environment } from './../../../../environments/environment.mock';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-lp-product-list',
  templateUrl: './lp-product-list.component.html',
  styleUrls: ['./lp-product-list.component.scss']
})
export class LpProductListComponent implements OnInit {

  @Input() products;
  constructor() { }

  ngOnInit() {
  }

  getProductImageUrl(url) {
    return environment.API_ENDPOINT + url;
  }

}
