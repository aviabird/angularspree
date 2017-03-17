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
  constructor(private variantParser: VariantParserService) {
  }

  ngOnInit() {
    this.description = this.product.description;
    this.images = this.product.master.images;

    this.customOptionTypesHash = this.variantParser
      .getOptionsToDisplay(this.product.variants, this.product.option_types);
  }

  /**
   * @param: option: { key: "small",
   *                   value: {optionValue: {etc etc},
   *                   variantIds: [1,2,3] }}
   */
  onOptionClick(option) {
    const result = new VariantRetriverService(this.currentSelectedOptions,
                        this.customOptionTypesHash,
                        option, this.product).getVariant();

    this.currentSelectedOptions = result.newSelectedoptions;
    const newVariant: Variant = result.variant;
    this.description = newVariant.description;
    this.images = newVariant.images;
  }

}
