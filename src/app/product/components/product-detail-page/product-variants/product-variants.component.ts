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

     /**[tsize, tcolor] */
    // this.optionTypeNames = Object.keys(this.customOptionTypesHash);
 }

  /**
   * @param: option: { key: "small",
   *                   value: {optionValue: {etc etc},
   *                   variantIds: [1,2,3] }}
   */
  onOptionClick(option) {
    const currentselectedOptionType = option.value
                                    .optionValue
                                    .option_type_presentation;
    this.currentSelectedOptions[currentselectedOptionType] = option.key;
  }
}
