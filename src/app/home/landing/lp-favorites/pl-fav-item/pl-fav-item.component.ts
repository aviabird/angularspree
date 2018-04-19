import { environment } from './../../../../../environments/environment';
import { Product } from './../../../../core/models/product';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pl-fav-item',
  templateUrl: './pl-fav-item.component.html',
  styleUrls: ['./pl-fav-item.component.scss']
})
export class PlFavItemComponent implements OnInit {

  @Input() product: Product;
  constructor() { }

  ngOnInit() {
  }

  getProductImageUrl(url) {
    return environment.apiEndpoint + url;
  }

}