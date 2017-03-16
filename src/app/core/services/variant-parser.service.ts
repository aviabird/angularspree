import { Effect } from '@ngrx/effects';
import { OptionValue } from './../models/option_value';
import { element } from 'protractor';
import { Variant } from './../models/variant';
import { OptionType } from './../models/option_type';
import { Injectable } from '@angular/core';
interface XyzType {
  [id: string]: {
    [id: string]: {
      option_value: {},
      varaint_ids: [null];
    }
  };
}

@Injectable()
export class VariantParserService {

  constructor() { }
  /**
   * @param: variants: Varaint[], optionTypes: OptionType[]
   * 
   */
  getOptionsToDisplay(variants: Variant[], optionTypes: OptionType[]) {
    let optionTypesHash = {};

    /**Iterate over optionTypes say [tsize, tcolor] */
    optionTypes.forEach(optionType => {

      /**For each optionType iterate over each variant in varaints */
      variants.forEach(variant => {

        /**For option values like [small, Red] etc in varaint iterate over each option value */
        variant.option_values.forEach(optionValue => {

          /**Check if optionvalue's type i.e smalls type is tsize and then procced else not
           * i.e for tsize option type color option value like green will be ignored.
           */
          if (optionValue.option_type_name === optionType.name) {
            Object.assign(optionTypesHash, this.singleOptionTypeHashMaker(optionValue, optionTypesHash, optionType, variant));
          }
        });
      });
    });
    return optionTypesHash;
  }




  /**Create a single custom option type
   * 
   * @param: optionValue, optionTypesHash(final hash to return), optionType(i.e tsize, tcolor, etc),
   * variant(i.e current variant from which option value is to retrived e.g: (s-small, green))
   *
   * @return: {tsize: {small: {etc etc etc}}};
   */
  singleOptionTypeHashMaker(optionValue, optionTypesHash, optionType, variant) {
    const optionTypeName: string = optionType.name;
    const singleOption = {};
    // e.g: singleOption["tsize"] = {small: {etc, etc}};
    singleOption[optionTypeName] = this.optionMaker(optionValue, optionTypesHash, optionType, variant);
    return singleOption;
  }

  /**
   * Here we make optionvalue of option Type
   * say optionType is tsize  i.e key then here we making value of that option OptionType
   * like { small: {optionvalue: {}, variant_ids: [1,2,3,4]}};
   */
  optionMaker(optionValue: OptionValue, optionTypesHash, optionType, variant) {
    const name = optionValue.name;
    const optionInnerValue = {};
    // e.g: optionInnverValue['small'] = {option_value: {etc ,etc}, variant_ids: [1,2,3,4]}
    optionInnerValue[name] = this.optionInnerValueMaker(optionValue, optionTypesHash, optionType, variant);
    return optionInnerValue;
  }

  /**
   * Creates Inner Values of optionValue
   * like { option_value: {}, varaint_ids: [1,2,3,4]};
   */
  optionInnerValueMaker(optionValue: OptionValue, optionTypesHash, optionType, variant) {
    return Object.assign({}, {
      option_value: optionValue,
      variant_ids: this.variantIdsMaker(optionValue, optionTypesHash, optionType, variant)
    });
  }

  /**
   * Checks if the optionType  and the optionvalue of that type exist in OptionTypesHash 
   * i.e "tsize" exists in the main hash that we are creating and corresponding "small" value exists too
   * then take arr of the variant ids and push a new id in it and return;
   * else create a new array of the varaint id and return;
   */
  variantIdsMaker(optionValue: OptionValue, optionTypesHash, optionType, variant) {
    if (optionTypesHash[optionType.name] != null && optionTypesHash[optionType.name][optionValue.name] != null ) {
      const variantArr = optionTypesHash[optionType.name][optionValue.name].variant_ids;
      variantArr.push(variant.id);
      return variantArr;
    } else {
      return Array.of(variant.id);
    }
  }
}
