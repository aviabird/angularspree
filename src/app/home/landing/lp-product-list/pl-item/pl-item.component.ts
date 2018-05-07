import { Product } from './../../../../core/models/product';
import { Component, OnInit, Input } from '@angular/core';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'app-pl-item',
  templateUrl: './pl-item.component.html',
  styleUrls: ['./pl-item.component.scss']
})
export class PlItemComponent implements OnInit {
  @Input() product: Product;
  constructor() { }

  ngOnInit() {
  }

  getProductImageUrl(url) {
    return environment.apiEndpoint + url;
  }
}
