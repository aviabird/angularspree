import { Component, OnInit, Input } from '@angular/core';
import { Product } from './../../../../core/models/product';
import { VariantParserService } from './../../../../core/services/variant-parser.service';

@Component({
  selector: 'app-product-variants',
  templateUrl: './product-variants.component.html',
  styleUrls: ['./product-variants.component.scss']
})
export class ProductVariantsComponent implements OnInit {
  @Input() product: Product;
  variants: any;
  optionTypeNames: String[];
  constructor(private variantParser: VariantParserService) { 
  }

  ngOnInit() {
    this.variants = this.variantParser
      .getOptionsToDisplay(this.product.variants, this.product.option_types);
    this.optionTypeNames = Object.keys(this.variants);
 }

}
