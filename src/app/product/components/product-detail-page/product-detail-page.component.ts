import { map } from 'rxjs/operators';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from './../../../core/models/product';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-detail-page',
  template: `
    <app-product-details [product]="product$ | async"></app-product-details>
  `,
  styleUrls: ['./product-detail-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductDetailPageComponent implements OnInit {
  product$: Observable<Product>;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  };


  ngOnInit() {
    this.product$ = this.route.data.pipe(map(({ product }) => product));
  }

}
