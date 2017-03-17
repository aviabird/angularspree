import { Injectable } from '@angular/core';

@Injectable()
export class VariantRetriverService {
  customSelectedOptions = {};
  currentVariantIds = [];
  variantId = null;
  variant = null;

  constructor(public currentSelectedOptions,
    public customOptionTypesHash,
    public currSelectedOption,
    public product) {

    const currSelectedOptionType = currSelectedOption.value
      .optionValue
      .option_type_presentation;

    currentSelectedOptions[currSelectedOptionType] = currSelectedOption.key;
  }


  getVariant() {
    this.createCustomSelectedOptions();
    this.setCombinedVariantIds();
    this.getVariantId();
    this.parseVariantId();
    this.getVariantFromProduct();
    return { newSelectedoptions: this.currentSelectedOptions,
             variant: this.variant };
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
    if (this.variantId === null) {
      this.variantId = this.currSelectedOption.values.variantIds[0];
    }
  }


  getVariantFromProduct() {
    const result = this.product.variants
      .filter( v => { return v.id === this.variantId; });

    this.variant = result ? result[0] : null;
  }
}
