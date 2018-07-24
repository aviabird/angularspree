import { relatedProducts, productReviews } from './../../../reducers/selectors';
import { ProductActions } from './../../../actions/product-actions';
import { Observable } from 'rxjs';
import { getProductsByKeyword } from './../../../../home/reducers/selectors';
import { SearchActions } from './../../../../home/reducers/search.actions';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { AppState } from './../../../../interfaces';
import { Store } from '@ngrx/store';
import { CheckoutActions } from './../../../../checkout/actions/checkout.actions';

import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy,
} from '@angular/core';

import { Product } from './../../../../core/models/product';
import { ProductService } from './../../../../core/services/product.service';
import { getAuthStatus } from '../../../../auth/reducers/selectors';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductDetailsComponent implements OnInit {

  @Input() product: Product;

  description: any;
  images: any;
  variantId: any;
  productID: any;
  productdata: any;
  isMobile = false;
  screenwidth: any;
  isAuthenticated: boolean;
  similarProducts$: Observable<any>;
  relatedProducts$: Observable<any>;
  reviewProducts$: Observable<any>;

  constructor(
    private checkoutActions: CheckoutActions,
    private store: Store<AppState>,
    private productService: ProductService,
    private router: Router,
    private toastrService: ToastrService,
    private searchActions: SearchActions,
    private productsActions: ProductActions
  ) { }

  ngOnInit() {
    this.screenwidth = window.innerWidth;
    this.calculateInnerWidth();

    if (this.product.has_variants) {
      const product = this.product.variants[0];
      this.description = product.description;
      this.images = product.images;
      this.variantId = product.id;
      this.productID = this.product.id;
      this.product.display_price = product.display_price;
      this.product.price = product.price;
      this.product.master.is_orderable = product.is_orderable;
      this.product.master.cost_price = product.cost_price;
    } else {
      this.description = this.product.description;
      this.images = this.product.master.images;
      this.variantId = this.product.master.id;
      this.productID = this.product.id;
    }


    this.productService.getRelatedProducts(this.productID)
      .subscribe(productdata => {
        this.productdata = productdata;
      });

    if (this.product.taxon_ids[0]) {
      this.store.dispatch(
        this.searchActions.getProductsByTaxon(`id=${this.product.taxon_ids[0]}`)
      );
      this.similarProducts$ = this.store.select(getProductsByKeyword);
    }

    this.store.dispatch(this.productsActions.getRelatedProduct(this.productID));
    this.relatedProducts$ = this.store.select(relatedProducts);

    this.store.dispatch(this.productsActions.getProductReviews(this.productID));
    this.reviewProducts$ = this.store.select(productReviews);
  }
  calculateInnerWidth() {
    if (this.screenwidth <= 800) {
      this.isMobile = this.screenwidth;
    }
  }


  addToCart(quantitiy) {
    this.store.dispatch(
      this.checkoutActions.addToCart(this.variantId, quantitiy)
    );
  }

  markAsFavorite() {
    this.productService.markAsFavorite(this.product.id).subscribe(res => {
      this.toastrService.info(res['message'], 'info');
    });
  }

  showReviewForm() {
    this.router.navigate([this.product.slug, 'write_review'], {
      queryParams: { prodId: this.productID }
    });
  }

  selectedVariant(variant) {
    this.images = variant.images
    this.variantId = variant.id
  }
}
