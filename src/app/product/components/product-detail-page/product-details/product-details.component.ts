import { Variant } from './../../../../core/models/variant';
import { VariantRetriverService } from './../../../../core/services/variant-retriver.service';
import { Component, OnInit, Input } from '@angular/core';
import { Product } from './../../../../core/models/product';
import { VariantParserService } from './../../../../core/services/variant-parser.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  @Input() product: Product;
  customOptionTypesHash: any;
  currentSelectedOptions = {};
  description: any;
  images: any;
  mainOptions: any;
  correspondingOptions: any;
  constructor(private variantParser: VariantParserService,
    private variantRetriver: VariantRetriverService) {
  }

  ngOnInit() {
    this.description = this.product.description;
    this.images = this.product.master.images;

    this.customOptionTypesHash = this.variantParser
      .getOptionsToDisplay(this.product.variants, this.product.option_types);
    this.mainOptions = this.makeGlobalOptinTypesHash(this.customOptionTypesHash);
    this.correspondingOptions = this.mainOptions;
    console.log('Custom hash', this.customOptionTypesHash);
    console.log('main options are', this.mainOptions);
  }

  /**
   * @param: option: { key: "small",
   *                   value: {optionValue: {etc etc},
   *                   variantIds: [1,2,3] }}
   */
  onOptionClick(option) {
    const result = this.variantRetriver
      .getVariant(this.currentSelectedOptions,
      this.customOptionTypesHash,
      option, this.product);

    this.createNewCorrespondingOptions(result.newCorrespondingOptions,
                                       option.value.optionValue.option_type_name);

    this.currentSelectedOptions = result.newSelectedoptions;
    const newVariant: Variant = result.variant;
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
}
