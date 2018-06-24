import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Subscription ,  Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Product } from './../../../core/models/product';
import { ProductService } from './../../../core/services/product.service';

@Component({
  selector: 'app-product-detail-page',
  templateUrl: './product-detail-page.component.html',
  styleUrls: ['./product-detail-page.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductDetailPageComponent implements OnInit {
  actionsSubscription: Subscription;
  product$: Product = null;
  routeSubs: Subscription;
  productId: any;


  constructor(private productService: ProductService,
    private route: ActivatedRoute) {

    /**On Init
     * 1. Parse route params
     * 2. Retrive product id
     * 3. Ask for the product detail based on product id
     * */
    this.actionsSubscription = this.route.params.subscribe(
      (params: any) => {
        this.productId = params['id'];
        this.productService
          .getProduct(this.productId)
          .subscribe(response => this.product$ = response);
      }
    );
  };


  ngOnInit() {
  }

  /**
   * Action To be dispatched
   * when added to cart
   */
  addToCart() {
    return;
  }

}
