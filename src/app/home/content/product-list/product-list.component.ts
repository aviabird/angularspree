import { getSelectedTaxonIds } from './../../reducers/selectors';
import { Observable } from 'rxjs/Rx';
import { AppState } from './../../../interfaces';
import { Store } from '@ngrx/store';
import { environment } from './../../../../environments/environment';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  @Input() products;
  @Input('taxonIds') selectedTaxonIds;

  constructor() { }

  ngOnInit() {
    // console.log('products', this.products);
  }

  filterProduct(product) {
    debugger;
    return false;
  }

  getProductImageUrl(url) {
    return environment.API_ENDPOINT + url;
  }

}
