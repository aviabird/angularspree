import { Component, OnInit, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from './../../../core/models/product';

@Component({
  selector: 'app-product-detail-page',
  template: `
    <app-product-details [product]="product"></app-product-details>
  `,
  styleUrls: ['./product-detail-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductDetailPageComponent implements OnInit {
  product: Product;

  constructor(
    private route: ActivatedRoute
  ) {};


  ngOnInit() {
    this.product = this.route.snapshot.data['product'];
  }

}
