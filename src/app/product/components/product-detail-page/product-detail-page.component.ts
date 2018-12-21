import { map } from 'rxjs/operators';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from './../../../core/models/product';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-detail-page',
  template: `
    <app-product-details [product]="product$ | async" [variantId]="variantId$ | async"></app-product-details>
  `,
  styles: [''],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductDetailPageComponent implements OnInit {
  product$: Observable<Product>;
  variantId$: Observable<number>;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  };


  ngOnInit() {
    this.product$ = this.route.data.pipe(map(({ product }) => product));
    this.variantId$ = this.route.params.pipe(map(p => p.variantId));
  }

}
