import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Variant } from './../../../../core/models/variant';
import { VariantRetriverService } from './../../../../core/services/variant-retriver.service';
import { VariantParserService } from './../../../../core/services/variant-parser.service';

@Component({
  selector: 'app-product-price-info',
  templateUrl: './product-price-info.component.html',
  styleUrls: ['./product-price-info.component.scss']
})
export class ProductPriceInfoComponent implements OnInit {
  @Input() product;
  @Output() onAddToCart = new EventEmitter<Object>();
  @Output() onMarkAsFavorites = new EventEmitter<Object>();

  customOptionTypesHash: any;
  currentSelectedOptions = {};
  description: any;
  images: any;
  mainOptions: any;
  correspondingOptions: any;
  variantId: any;

  constructor(private variantParser: VariantParserService,
    private variantRetriver: VariantRetriverService,
  ) { }

  ngOnInit() {

    this.images = this.product.master.images;
    this.variantId = this.product.master.id;
    this.customOptionTypesHash = this.variantParser
      .getOptionsToDisplay(this.product.variants, this.product.option_types);
    this.mainOptions = this.makeGlobalOptinTypesHash(this.customOptionTypesHash);
    this.correspondingOptions = this.mainOptions;
  }

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

  addToCart(event) {
    this.onAddToCart.emit(event)
  }

  markAsFavorites() {
    this.onMarkAsFavorites.emit()
  }
}
