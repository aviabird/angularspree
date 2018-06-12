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
import { Variant } from './../../../../core/models/variant';
import { VariantRetriverService } from './../../../../core/services/variant-retriver.service';
import { Component, OnInit, Input, ChangeDetectionStrategy, OnChanges } from '@angular/core';
import { Product } from './../../../../core/models/product';
import { VariantParserService } from './../../../../core/services/variant-parser.service';
import { ProductService } from './../../../../core/services/product.service';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductDetailsComponent implements OnInit, OnChanges {
  @Input() product: Product;

  dynamic = 50;
  customOptionTypesHash: any;
  currentSelectedOptions = {};
  description: any;
  images: any;
  mainOptions: any;
  correspondingOptions: any;
  variantId: any;
  productID: any
  productdata: any;
  ratingOneStar: any = 0;
  ratingTwoStar: any = 0;
  ratingThreeStar: any = 0;
  ratingFourStar: any = 0;
  ratingFivwStar: any = 0;
  ratingTodal: any = 0;
  percent: number[] = new Array(5);
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
    this.customOptionTypesHash = this.variantParser
      .getOptionsToDisplay(this.product.variants, this.product.option_types);
    this.mainOptions = this.makeGlobalOptinTypesHash(this.customOptionTypesHash);
    this.correspondingOptions = this.mainOptions;
    this.productID = this.product.id;

    this.productService.getReletedProducts(this.productID)
      .subscribe(productdata => {
        this.productdata = productdata
      });
    if (this.product.taxon_ids[0]) {
      this.store.dispatch(this.searchActions.getProducsByTaxon(`id=${this.product.taxon_ids[0]}`))
      this.similarProducts$ = this.store.select(getProductsByKeyword)
    }

    this.store.dispatch(this.productsActions.getRelatedProduct(this.productID))
    this.relatedProducts$ = this.store.select(relatedProducts)

    this.store.dispatch(this.productsActions.getReviewsProduct(this.productID))
    this.reviewProducts$ = this.store.select(productReviews)


    // this.productService.getProductReviews(this.productID).
    // subscribe(data => {
    //   this.reviewList = data;
    //   this.review = this.reviewList.reviews;
    // });
  }
  ngOnChanges() {

  }

  /**
   * @param: option: { key: "small",
   *                   value: {optionValue: {etc etc},
   *                   variantIds: [1,2,3] }}
   */
  onOptionClick(option) {
    const result = new VariantRetriverService()
      .getVariant(this.currentSelectedOptions,
        this.customOptionTypesHash,
        option, this.product);

    this.createNewCorrespondingOptions(result.newCorrespondingOptions,
      option.value.optionValue.option_type_name);

    this.currentSelectedOptions = result.newSelectedoptions;
    const newVariant: Variant = result.variant;
    this.variantId = newVariant.id;
    this.description = newVariant.description;
    this.images = newVariant.images;
  }

  makeGlobalOptinTypesHash(customOptionTypes) {
    const temp = {};
    for (const key in customOptionTypes) {
      if (customOptionTypes.hasOwnProperty(key)) {
        temp[key] = Object.keys(customOptionTypes[key]);
      }
    };
    return temp;
  }

  createNewCorrespondingOptions(newOptions, optionKey) {
    for (const key in this.correspondingOptions) {
      if (this.correspondingOptions.hasOwnProperty(key) && key !== optionKey) {
        this.correspondingOptions[key] = newOptions[key];
      }
    }
  }

  addToCart(quantitiy) {
    this.store.dispatch(this.checkoutActions.addToCart(this.variantId, quantitiy));
  }

  // TO DO (to add the daynamic quantity)
  buyNow() {
    this.store.dispatch(this.checkoutActions.addToCart(this.variantId, 1));
  }
  markAsFavorite() {
    this.productService.markAsFavorite(this.product.id).subscribe((res) => {
      this.toastrService.info(res['message'], 'info')
    });
  }
  showReviewForm() {
    this.router.navigate([this.product.slug, 'write_review'], { queryParams: { 'prodId': this.productID } });
  }
}



