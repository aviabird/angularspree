import { Component, OnInit, Input } from '@angular/core';
import { Product } from './../../../../core/models/product';
import { VariantParserService } from './../../../../core/services/variant-parser.service';

interface CurrentSelectedOptionsType {
  [key: string]: String;
};

@Component({
  selector: 'app-product-variants',
  templateUrl: './product-variants.component.html',
  styleUrls: ['./product-variants.component.scss']
})
export class ProductVariantsComponent implements OnInit {
  @Input() product: Product;
  customOptionTypesHash: any;
  optionTypeNames: String[];
  currentSelectedOptions = {};

  constructor(private variantParser: VariantParserService) {
  }

  ngOnInit() {
    this.customOptionTypesHash = this.variantParser
      .getOptionsToDisplay(this.product.variants, this.product.option_types);
    // console.log(this.customOptionTypesHash);
    // console.log(this.product.variants);
    /**[tsize, tcolor] */
    // this.optionTypeNames = Object.keys(this.customOptionTypesHash);
  }

  /**
   * @param: option: { key: "small",
   *                   value: {optionValue: {etc etc},
   *                   variantIds: [1,2,3] }}
   */
  onOptionClick(option) {
    console.log(this.customOptionTypesHash)
    const currentselectedOptionType = option.value
      .optionValue
      .option_type_presentation;
    this.currentSelectedOptions[currentselectedOptionType] = option.key;

    const customSelectedOptions = {};
    let currentVariantIds = [];
    const uiqueId = null;

    for (const key in this.currentSelectedOptions) {

      if (this.currentSelectedOptions.hasOwnProperty(key)) {
        customSelectedOptions[this.currentSelectedOptions[key]] =
          this.customOptionTypesHash[key][this.currentSelectedOptions[key]];
      }
    };


    for (const key in customSelectedOptions) {
      if (customSelectedOptions.hasOwnProperty(key)) {
        currentVariantIds.push(customSelectedOptions[key].variantIds);
      }
    }

    console.log(JSON.stringify(currentVariantIds));

    const result = currentVariantIds.shift().filter(function (v) {
      return currentVariantIds.every(function (a) {
        return a.indexOf(v) !== -1;
      });
    });
    console.log("Selected Variant id", result);
  }
}
