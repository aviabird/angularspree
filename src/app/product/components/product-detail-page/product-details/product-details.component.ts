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

  constructor(private variantParser: VariantParserService) {
  }

  ngOnInit() {
    this.customOptionTypesHash = this.variantParser
      .getOptionsToDisplay(this.product.variants, this.product.option_types);
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
