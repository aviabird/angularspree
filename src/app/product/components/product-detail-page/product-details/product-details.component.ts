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
import { VariantRetriverService } from './../../../../core/services/variant-retriver.service';

import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy,
} from '@angular/core';

import { Product } from './../../../../core/models/product';
import { VariantParserService } from './../../../../core/services/variant-parser.service';
import { ProductService } from './../../../../core/services/product.service';

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
  similarProducts$: Observable<any>;
  relatedProducts$: Observable<any>;
  reviewProducts$: Observable<any>;

  constructor(
    private variantParser: VariantParserService,
    private variantRetriver: VariantRetriverService,
    private checkoutActions: CheckoutActions,
    private store: Store<AppState>,
    private productService: ProductService,
    private router: Router,
    private toastrService: ToastrService,
    private searchActions: SearchActions,
    private productsActions: ProductActions
  ) { }

  ngOnInit() {
    this.description = this.product.description;
    this.images = this.product.master.images;
    this.variantId = this.product.master.id;
    this.productID = this.product.id;

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

  ngOnChanges() { }

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
