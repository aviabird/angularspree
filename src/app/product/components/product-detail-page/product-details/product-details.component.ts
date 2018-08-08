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
  PLATFORM_ID,
  Inject
} from '@angular/core';

import { Product } from './../../../../core/models/product';
import { ProductService } from './../../../../core/services/product.service';
import { Meta, Title } from '@angular/platform-browser';
import { environment } from '../../../../../environments/environment';
import { Taxon } from '../../../../core/models/taxon';
import { FormGroup } from '@angular/forms';
import { getLineItems } from '../../../../checkout/reducers/selectors';
import { isPlatformBrowser } from '@angular/common';

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
  isMobile = false;
  screenwidth: any;
  isAuthenticated: boolean;
  similarProducts$: Observable<any>;
  relatedProducts$: Observable<any>;
  reviewProducts$: Observable<any>;
  frontEndUrl = environment.config.frontEndUrl;
  schema: any;
  selectedVariant: any;
  brand: Taxon;
  checkPincodeForm: FormGroup;
  isCodAvilable$: Observable<any>;
  linesItems: any

  constructor(
    private checkoutActions: CheckoutActions,
    private store: Store<AppState>,
    private productService: ProductService,
    private router: Router,
    private toastrService: ToastrService,
    private searchActions: SearchActions,
    private productsActions: ProductActions,
    private meta: Meta,
    private title: Title,
    @Inject(PLATFORM_ID) private platformId: any
  ) {

  }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.screenwidth = window.innerWidth;
    }
    this.calculateInnerWidth();
    this.addMetaInfo(this.product);
    this.initData();
    this.store.dispatch(this.productsActions.getRelatedProduct(this.productID));
    this.relatedProducts$ = this.store.select(relatedProducts);
    this.store.dispatch(this.productsActions.getProductReviews(this.productID));
    this.reviewProducts$ = this.store.select(productReviews);
    this.findBrand();
    this.addJsonLD(this.product);
  }

  initData() {
    if (this.product.has_variants) {
      const product = this.product.variants[0];
      this.description = product.description;
      this.images = product.images;
      this.variantId = product.id;
      this.selectedVariant = product;
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
      this.selectedVariant = this.product.master;
    }

    if (this.product.taxon_ids[0]) {
      this.store.dispatch(
        this.searchActions.getProductsByTaxon(`id=${this.product.taxon_ids[0]}`)
      );
      this.similarProducts$ = this.store.select(getProductsByKeyword);
    }
  }

  calculateInnerWidth() {
    if (this.screenwidth <= 800) {
      this.isMobile = this.screenwidth;
    }
  }

  addToCart(event) {
    let navigateToCart: boolean;
    this.store.select(getLineItems)
      .subscribe(res => {
        this.linesItems = res
      })
    if (event.buyNow) {
      this.linesItems.find(item => {
        if (item.variant_id === this.variantId && item.quantity === 1) {
          navigateToCart = true
        }
      })
      if (navigateToCart) {
        this.router.navigate(['checkout', 'cart'])
      } else {
        this.store.dispatch(
          this.checkoutActions.addToCart(this.variantId, event.count)
        );
        setTimeout(() => { this.router.navigate(['checkout', 'cart']); }, 1500)
      }
    } else {
      this.store.dispatch(
        this.checkoutActions.addToCart(this.variantId, event.count)
      );
    }
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

  selectVariant(variant) {
    this.images = variant.images;
    this.variantId = variant.id;
    this.selectedVariant = variant;
    this.addJsonLD(this.product);
  }

  get selectedImage() { return this.images ? this.images[0] : ''; }

  addMetaInfo(product: Product) {
    this.meta.updateTag({
      name: 'description',
      content: product.meta_description
    });

    this.meta.updateTag({
      name: 'keywords',
      content: product.meta_keywords
    });

    this.meta.updateTag({ name: 'title', content: product.slug });
    this.meta.updateTag({ name: 'apple-mobile-web-app-title', content: environment.appName });
    this.meta.updateTag({ property: 'og:description', content: product.meta_description });
    this.meta.updateTag({ property: 'og:url', content: environment.config.frontEndUrl }),
      this.title.setTitle(this.product.name),
      this.meta.updateTag({ property: 'twitter:title', content: this.product.description });
  }

  addJsonLD(product: Product) {
    const stockStatus = this.selectedVariant.is_orderable ? 'InStock' : 'OutOfStock';
    this.schema = {
      '@context': 'https://schema.org',
      '@type': 'Product',
      'url': isPlatformBrowser(this.platformId) ? location.href : '',
      'itemCondition': 'https://schema.org/NewCondition',
      'brand': {
        '@type': 'Thing',
        'name':  `${this.brand.name}`
      },
      'aggregateRating': {
        '@type': 'AggregateRating',
        'ratingValue': product.avg_rating,
        'reviewCount': `${product.reviews_count}`,
        'bestRating': '5',
        'worstRating': '0'
      },
      'description': product.meta_description,
      'name': product.name,
      'image': this.selectedImage && this.selectedImage.product_url,
      'offers': [{
        '@type': 'Offer',
        'itemCondition': 'https://schema.org/NewCondition',
        'availability': `https://schema.org/${stockStatus}`,
        'price': this.selectedVariant.price,
        'priceCurrency': product.currency,
      }]
    };
  }

  scrollToReviewMobile() {
    if (isPlatformBrowser(this.platformId)) {
      document.getElementById('review').scrollIntoView({ behavior: 'smooth' });
    }
  }

  findBrand() {
    const brandClassification = this.product.classifications.find(element =>
      element.taxon.pretty_name.includes('Brands')
    );
    this.brand = brandClassification ?  brandClassification.taxon : {} as Taxon;
  }
}
