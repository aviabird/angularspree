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
    const newVarient = new VariantRetriverService(this.currentSelectedOptions,
                        this.customOptionTypesHash,
                        option, this.product).getVariant();
    }
}
