import { Variant } from './../../../../core/models/variant';
import { Observable } from 'rxjs';
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
  description: string;
  images: any;
  @Input() variantId: number;
  productId: number;
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
  noImageUrl = 'assets/default/image-placeholder.svg'
  ratingCategories1$: Observable<Object>;

  constructor(
    private checkoutActions: CheckoutActions,
    private store: Store<AppState>,
    private router: Router,
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
    this.addJsonLD(this.product);
  }

  initData() {
    if (this.product.variants.length) {
      const variantProduct = this.product.variants.find(variant => variant.id === this.variantId) || this.product.variants[0];
      this.images = variantProduct.images.length ? variantProduct.images : this.imagesPlaceHolder(this.noImageUrl);
      this.description = variantProduct.description;
      this.product.name = variantProduct.name;
      this.selectedVariant = variantProduct;
      this.productId = this.product.id;
      this.product.selling_price = variantProduct.selling_price;
      this.product.max_retail_price = variantProduct.max_retail_price;
      this.product.is_orderable = variantProduct.is_orderable;
    } else {
      this.images = this.product.images.length ? this.product.images : this.imagesPlaceHolder(this.noImageUrl);
      this.description = this.product.description;
      this.variantId = this.product.id;
      this.productId = this.product.id;
      this.selectedVariant = this.product.variants[0];
    }
  }

  calculateInnerWidth() {
    if (this.screenwidth <= 800) {
      this.isMobile = this.screenwidth;
    }
  }

  addToCart(event: { buyNow: any; count: number; }) {
    let navigateToCart: boolean;
    this.store.select(getLineItems)
      .subscribe(res => {
        this.linesItems = res
      })
    if (event.buyNow) {
      this.linesItems.find((item: { product_id: number; quantity: number; }) => {
        if (item.product_id === +this.variantId && item.quantity === 1) {
          navigateToCart = true
        }
      })
      if (navigateToCart) {
        this.router.navigate(['checkout', 'cart'])
      } else {
        this.store.dispatch(
          this.checkoutActions.addToCart(this.variantId, event.count, true));
      }
    } else {
      this.store.dispatch(
        this.checkoutActions.addToCart(this.variantId, event.count, false));
    }
  }

  markAsFavorite() { }

  showReviewForm() {
    this.router.navigate([this.product.slug, 'write_review'], {
      queryParams: { prodId: this.productId }
    });
  }

  selectVariant(variant: Variant) {
    this.images = variant.images.length ? variant.images : this.imagesPlaceHolder(this.noImageUrl);
    this.variantId = variant.id;
    this.selectedVariant = variant;
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
    const stockStatus = product.is_orderable ? 'InStock' : 'OutOfStock';
    this.schema = {
      '@context': 'https://schema.org',
      '@type': 'Product',
      'url': isPlatformBrowser(this.platformId) ? location.href : '',
      'itemCondition': 'https://schema.org/NewCondition',
      'brand': {
        '@type': 'Thing',
        'name': `AviaCommerce`
      },
      'aggregateRating': {
        '@type': 'AggregateRating',
        'ratingValue': product.rating_summary.average_rating,
        'reviewCount': `${product.rating_summary.review_count}`,
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
        'price': product.selling_price.amount,
        'priceCurrency': product.selling_price.currency,
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
    this.brand = brandClassification ? brandClassification.taxon : {} as Taxon;
  }

  imagesPlaceHolder(url: string) {
    const images = [{
      product_url: url,
      large_url: url,
      small_url: url
    }]
    return images;
  }
}
