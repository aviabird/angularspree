import { element } from 'protractor';

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
  newCorrespondingOptions: any;

  constructor() {
  }

  /**
   * Note: Params could have been taken in constructor
   * due to prod-build error for constructor,
   * currently taking params from function;
   * TODO: fix this issue
   * @param:
   * currentSelectedOptions: { tsize: "small", tcolor: "red" }
   * customOptionTypesHash: {tshirt-size: Object, tshirt-color: Object}
   * currSelectedOption: { key: "Small", value: Object } => One that is recently selected;
   * product: Product
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
    this.setCorrespondingOptions();
    return {
      newSelectedoptions: this.currentSelectedOptions,
      variant: this.variant,
      newCorrespondingOptions: this.newCorrespondingOptions
    };
  }


  /**
   * This sets current selected Options by user say (small, red, full-sleves)
   * { tsize: 'small', tcolor: 'red' }
   * if new currSelectedOptionType is tcolor and the value is blue the
   * previous one will get overidden
   * like { tsize: 'small', tcolor: 'red' } => { tsize: 'small', tcolor: 'blue' }
   *
   */
  setCurrentSelectedOptions() {
    const currSelectedOptionType = this.currSelectedOption.value
      .optionValue
      .option_type.name;
    this.currentSelectedOptions[currSelectedOptionType] = this.currSelectedOption.key;
  }

  /**
   * It creates Custom selected Options extracting the options selected by user from
   *  customOptionTypesHash
   * say user selected {tsize: 'small'} this will extract the red option from
   * the global option types hash {'tsize': [small: {etc..}, large: {etc..}, medium: {etc..}]}
   *
   */
  createCustomSelectedOptions() {
    /**
     * currentSelectedOptions: {tsize: 'small', tcolor: 'red'}
     * currentSelectedOptions: {} at first.. keeps
     * filling up on iteration of currentSelectedOptions
     *
     * this.customOptionTypesHash[key][this.currentSelectedOptions[key]] =
     * { optionValue: SomeObject, varaintIds: {etc etc} }
     *
     *
     ** */

    for (const key in this.currentSelectedOptions) {
      if (this.currentSelectedOptions.hasOwnProperty(key)) {
        this.customSelectedOptions[this.currentSelectedOptions[key]] =
          this.customOptionTypesHash[key][this.currentSelectedOptions[key]];
      }
    };
  }
  /**
   * Makes a currentVaraintIds from the set of customSelectedOptions
   * {'small': {OptionValue: Object, variantIds: [etc etc]}, 'red': {...}}
   * @return: array of arrays of varaintIds
   * e.g: [[1,2,3,4], [7,8,9,1]]
   */
  setCombinedVariantIds() {
    let temp = [];
    for (const key in this.customSelectedOptions) {
      // First key may be 'small' so varaiant Ids of small should be.
      // inside temp  = [vIds of small];
      if (this.customSelectedOptions.hasOwnProperty(key)) {
        // Make temp empty for each key;
        temp = [];
        this.customSelectedOptions[key].variantIds.forEach((obj) => {
          temp.push(Object.keys(obj)[0]);
        });
        this.currentVariantIds
          .push(temp);
      }
    }
  }

  /**
   * Gets a Unique variantId from the selectedOptions by user
   * by intersecting the arrays in currentvaraintIds
   * Example: [[1,2,3,4], [1,5,6,7]]
   * returns [1] from which we take first index so it is 1;
   * if the array only contains [[2,3,4]] then it will return
   * the first element i.e 2;
   */
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


  /**
   * Parses Varaint Id if null then sets the first
   * variantId in the array as the varaintId to return;
   */
  parseVariantId() {
    if (this.variantId === null || this.variantId === undefined) {
      this.variantId = this.currSelectedOption.value.variantIds[0];
    }
  }

  /**
   * Gets the Varaint From the Product by using the varaintId;
   * else returns null if not present;
   */
  getVariantFromProduct() {
    const result = this.product.variants
      .filter(v => {
        return v.id === this.variantId;
      });
    this.variant = result ? result[0] : null;
  }

  /**
   *
   *
   *
   * @memberof VariantRetriverService
   */
  setCorrespondingOptions() {
    const vIds: Array<any> = this.currSelectedOption.value.variantIds;
    const newObj = {};
    vIds.forEach((obj: Object) => {
      for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
          obj[key].forEach((oType: Object) => {
            for (const jkey in oType) {
              if (newObj[jkey] !== undefined) {
                newObj[jkey].push(oType[jkey]);
              } else {
                newObj[jkey] = Array.of(oType[jkey]);
              }
            }
          });
        }
      }
    });
    this.newCorrespondingOptions = newObj;
  }
}
