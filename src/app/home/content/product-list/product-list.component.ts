import { environment } from './../../../../environments/environment';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  @Input() products;

  constructor() { }

  ngOnInit() {
    // console.log('products', this.products);
  }

  getProductImageUrl(url) {
    return environment.API_ENDPOINT + url;
  }

}
