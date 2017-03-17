
/**
 * Note: This Service has a Lot of
 * Corner Cases that are not covered.
 * TODO: Fix This Corrner Cases;
 */
import { Product } from './../models/product';
import { Injectable } from '@angular/core';

@Injectable()
export class VariantRetriverService {
  customSelectedOptions = {};
  currentVariantIds = [];
  variantId = null;
  variant = null;
  currentSelectedOptions: any;
  customOptionTypesHash: any;
  currSelectedOption: any;
  product: Product;

  constructor() {
  }

  /**
   * Note: Params could have been taken in constructor
   * due to prod-build error for constructor,
   * currently taking params from function;
   * TODO: fix this issue
   */
  getVariant(currentSelectedOptions: any,
    customOptionTypesHash: any,
    currSelectedOption: any,
    product: any) {

    // Set Variables
    this.currentSelectedOptions = currentSelectedOptions;
    this.customOptionTypesHash = customOptionTypesHash;
    this.currSelectedOption = currSelectedOption;
    this.product = product;

    this.setCurrentSelectedOptions();
    this.createCustomSelectedOptions();
    this.setCombinedVariantIds();
    this.getVariantId();
    this.parseVariantId();
    this.getVariantFromProduct();

    return {
      newSelectedoptions: this.currentSelectedOptions,
      variant: this.variant
    };
  }


  createCustomSelectedOptions() {
    for (const key in this.currentSelectedOptions) {
      if (this.currentSelectedOptions.hasOwnProperty(key)) {
        this.customSelectedOptions[this.currentSelectedOptions[key]] =
          this.customOptionTypesHash[key][this.currentSelectedOptions[key]];
      }
    };
  }

  setCombinedVariantIds() {
    for (const key in this.customSelectedOptions) {
      if (this.customSelectedOptions.hasOwnProperty(key)) {
        this.currentVariantIds
          .push(this.customSelectedOptions[key].variantIds);
      }
    }
  }

  getVariantId() {
    // As scoped variable is not accessible
    // inside filter function hence the tempArr declaration;
    const tempArr = this.currentVariantIds;
    this.variantId = tempArr.shift().filter(function (v) {
      return tempArr.every(function (a) {
        return a.indexOf(v) !== -1;
      });
    })[0];
  }


  parseVariantId() {
    if (this.variantId === null || this.variantId === undefined) {
      this.variantId = this.currSelectedOption.value.variantIds[0];
    }
  }


  getVariantFromProduct() {
    const result = this.product.variants
      .filter(v => { return v.id === this.variantId; });

    this.variant = result ? result[0] : null;
  }

  setCurrentSelectedOptions() {
    const currSelectedOptionType = this.currSelectedOption.value
      .optionValue
      .option_type_presentation;

    this.currentSelectedOptions[currSelectedOptionType] = this.currSelectedOption.key;

  }

}
