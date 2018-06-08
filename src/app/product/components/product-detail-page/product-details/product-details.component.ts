import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { AppState } from './../../../../interfaces';
import { Store } from '@ngrx/store';
import { CheckoutActions } from './../../../../checkout/actions/checkout.actions';
import { Variant } from './../../../../core/models/variant';
import { VariantRetriverService } from './../../../../core/services/variant-retriver.service';
import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Product } from './../../../../core/models/product';
import { VariantParserService } from './../../../../core/services/variant-parser.service';
import { ProductService } from './../../../../core/services/product.service';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit, OnChanges {
  @Input() product: Product;
  @Input() reviewList;
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
  NAMES = [];

  constructor(
    private variantParser: VariantParserService,
    private variantRetriver: VariantRetriverService,
    private checkoutActions: CheckoutActions,
    private store: Store<AppState>,
    private productService: ProductService,
    private router: Router,
    private toastrService: ToastrService
  ) {

  }

  ngOnInit() {
    this.description = this.product.description;
    this.images = this.product.master.images;
    this.variantId = this.product.master.id;
    this.customOptionTypesHash = this.variantParser
      .getOptionsToDisplay(this.product.variants, this.product.option_types);
    this.mainOptions = this.makeGlobalOptinTypesHash(this.customOptionTypesHash);
    this.correspondingOptions = this.mainOptions;
    this.productID = this.product.id;
    this.productService.getRecentlyViewedProducts().
      subscribe(productdata => {
        this.productdata = productdata
      });
  }
  ngOnChanges() {
      // for (let i = 1; i < 100; i++) {
      //   this.NAMES.push[i]('text');
      // }
      console.log(this.NAMES[20]);
    if (this.ratingFivwStar) {
      for (let index = 0; index < this.percent.length; index++) {
        const element = this.percent[index];
        if (this.percent[index] = 0) {
          this.percent[index] = (this.ratingOneStar / this.ratingTodal) * 100;
        }
        if (this.percent[index] = 1) {
          this.percent[index] = (this.ratingTwoStar / this.ratingTodal) * 100;
        }
        if (this.percent[index] = 2) {
          this.percent[index] = (this.ratingThreeStar / this.ratingTodal) * 100;
        }
        if (this.percent[index] = 3) {
          this.percent[index] = (this.ratingFourStar / this.ratingTodal) * 100;
        }
        if (this.percent[index] = 4) {
          this.percent[index] = (this.ratingFivwStar / this.ratingTodal) * 100;
          console.log(this.percent[index]);
        }
      }
    }
    console.log(this.percent[3]);
    for (const key in this.reviewList) {
      if (this.reviewList.hasOwnProperty(key)) {
        const element = this.reviewList[key];
        switch (element.rating) {
          case element.rating = 1: {
            this.ratingOneStar += 1;
            break;
          }
          case element.rating = 2: {
            this.ratingTwoStar += 1;
            break;
          }
          case element.rating = 3: {
            this.ratingThreeStar += 1;
            break;
          }
          case element.rating = 4: {
            this.ratingFourStar += 1;
            break;
          }
          case element.rating = 5: {
            this.ratingFivwStar += 1;
            break;
          }
        }
        this.ratingTodal += element.rating;
      }
    }
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



