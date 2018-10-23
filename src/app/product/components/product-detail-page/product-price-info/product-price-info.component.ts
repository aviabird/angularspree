import { Component, OnInit, Input, EventEmitter, Output, PLATFORM_ID, Inject } from '@angular/core';
import { Variant } from './../../../../core/models/variant';
import { VariantRetriverService } from './../../../../core/services/variant-retriver.service';
import { VariantParserService } from './../../../../core/services/variant-parser.service';
import { Taxon } from '../../../../core/models/taxon';
import { isPlatformBrowser } from '@angular/common';
import { environment } from '../../../../../environments/environment';
import { Image } from '../../../../core/models/image';
import { Price } from '../../../../core/models/price';

@Component({
  selector: 'app-product-price-info',
  templateUrl: './product-price-info.component.html',
  styleUrls: ['./product-price-info.component.scss']
})
export class ProductPriceInfoComponent implements OnInit {
  @Input() product;
  @Input() isMobile;
  @Input() brand: Taxon;
  @Output() onAddToCart = new EventEmitter<Object>();
  @Output() onMarkAsFavorites = new EventEmitter<Object>();
  @Output() selectedVariant = new EventEmitter<Object>();


  customOptionTypesHash: any;
  currentSelectedOptions = {};
  description: string;
  images: Array<Image>;
  mainOptions: any;
  correspondingOptions: any;
  variantId: number;
  selectedVariantPrice: Price;
  isOrderable: boolean;
  currency = environment.config.currency_symbol;

  constructor(private variantParser: VariantParserService,
    @Inject(PLATFORM_ID) private platformId: object
  ) {
  }

  ngOnInit() {
    this.images = this.product.images;
    this.variantId = this.product.id;
    if (this.product.theme) {
      this.customOptionTypesHash = this.variantParser
        .getOptionsToDisplay(this.product.variants, this.product.theme.option_types);
      this.mainOptions = this.makeGlobalOptinTypesHash(this.customOptionTypesHash);
      this.correspondingOptions = this.mainOptions;
    }
    this.isOrderable = this.product.is_orderable;
  }

  onOptionClick(option) {
    const result = new VariantRetriverService().getVariant(
      this.currentSelectedOptions,
      this.customOptionTypesHash,
      option,
      this.product,
    );

    this.createNewCorrespondingOptions(
      result.newCorrespondingOptions,
      option.value.optionValue.option_type.name
    );
    this.currentSelectedOptions = result.newSelectedoptions;
    const newVariant: Variant = result.variant;
    this.variantId = newVariant.id;
    this.description = newVariant.description;
    this.images = newVariant.images;
    this.getSelectedVariant(result.variant);
    this.isOrderable = newVariant.is_orderable;
    this.product.max_retail_price = newVariant.max_retail_price;
    this.product.selling_price = newVariant.selling_price;
    this.product.name = newVariant.name;
  }

  makeGlobalOptinTypesHash(customOptionTypes) {
    const temp = {};
    for (const key in customOptionTypes) {
      if (customOptionTypes.hasOwnProperty(key)) {
        temp[key] = Object.keys(customOptionTypes[key]);
      }
    }
    return temp;
  }

  createNewCorrespondingOptions(newOptions, optionKey) {
    for (const key in this.correspondingOptions) {
      if (this.correspondingOptions.hasOwnProperty(key) && key !== optionKey) {
        this.correspondingOptions[key] = newOptions[key];
      }
    }
  }

  addToCart(event) {
    this.onAddToCart.emit(event)
  }

  markAsFavorites() {
    this.onMarkAsFavorites.emit()
  }

  getSelectedVariant(variant) {
    this.selectedVariant.emit(variant)
  }

  get discount() {
    return Math.ceil(+this.product.max_retail_price.amount - +this.product.selling_price.amount);
  }

  get discountPercent() {
    return `${Math.ceil(this.discount / +this.product.max_retail_price.amount * 100)}%`;
  }

  scrollToReview() {
    if (isPlatformBrowser(this.platformId)) {
      document.getElementById('review').scrollIntoView({ behavior: 'smooth' });
    }
  }
}
