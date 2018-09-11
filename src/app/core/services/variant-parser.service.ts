import { Effect } from '@ngrx/effects';
import { OptionValue } from './../models/option_value';
import { element } from 'protractor';
import { Variant } from './../models/variant';
import { OptionType } from './../models/option_type';
import { Injectable } from '@angular/core';
import { debug } from 'util';

/**Custom Interface for return option hash */
interface OptionTypesHash {
  [id: string]: {
    [id: string]: {
      optionValue: {},
      variantIds: Array<any>;
    }
  };
}

@Injectable()
export class VariantParserService {
  currVariantOptionValues: any;
  constructor() { }

  /**
   *
   *
   * @param {Variant[]} variants
   * @param {OptionType[]} optionTypes
   * @returns
   *
   * @memberof VariantParserService
   */
  getOptionsToDisplay(variants: Variant[], optionTypes: OptionType[]) {
    const optionTypesHash: OptionTypesHash = {};

    /**Iterate over optionTypes say [tsize, tcolor] */
    optionTypes.forEach(optionType => {
      /**For each optionType iterate over each variant in varaints */
      variants.forEach(variant => {
        /**For option values like [small, Red] etc in varaint iterate over each option value */
        this.currVariantOptionValues = variant.options;

        variant.options.forEach(optionValue => {
          /**
          * This loop runs for 750 times for 2 optiontypes and optionsvalues 3 and 5
          * Refactor this latter;
          */

          /**Check if optionvalue's type i.e smalls type is tsize and then procced else not
           * i.e for tsize option type color option value like green will be ignored.
           */
          if (optionValue.option_type.name === optionType.name) {
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
  singleOptionTypeHashMaker(optionValue: OptionValue, optionTypesHash: OptionTypesHash,
    optionType: OptionType, variant: Variant) {

    const optionTypeName: string = optionType.name;
    if (optionTypesHash[optionTypeName] != null) {

      // This will become value of op["tsize"] i.e {small: {etc, etc}};
      optionTypesHash[optionTypeName] = Object.assign({},
        optionTypesHash[optionTypeName],
        this.optionMaker(optionValue, optionTypesHash, optionType, variant));

      return optionTypesHash;
    } else {
      const singleOption = {};
      // e.g: singleOption["tsize"] = {small: {etc, etc}};
      singleOption[optionTypeName] = this.optionMaker(optionValue, optionTypesHash, optionType, variant);
      return singleOption;
    }
  }

  /**
   * Here we make optionvalue of option Type
   * say optionType is tsize  i.e key then here we making value of that option OptionType
   * like { small: {optionvalue: {}, variant_ids: [1,2,3,4]}};
   */
  optionMaker(optionValue: OptionValue, optionTypesHash: OptionTypesHash,
    optionType: OptionType, variant: Variant) {

    const name = optionValue.value;
    const optionInnerValue = {};
    // e.g: optionInnverValue['small'] = {option_value: {etc ,etc}, variant_ids: [1,2,3,4]}
    optionInnerValue[name] = this.optionInnerValueMaker(optionValue, optionTypesHash, optionType, variant);
    return optionInnerValue;
  }

  /**
   * Creates Inner Values of optionValue
   * like { option_value: {}, varaint_ids: [1,2,3,4]};
   */
  optionInnerValueMaker(optionValue: OptionValue, optionTypesHash: OptionTypesHash,
    optionType: OptionType, variant: Variant) {

    return Object.assign({}, {
      optionValue: optionValue,
      variantIds: this.variantIdsMaker(optionValue, optionTypesHash, optionType, variant)
    });
  }

  /**
   * Checks if the optionType  and the optionvalue of that type exist in OptionTypesHash
   * i.e "tsize" exists in the main hash that we are creating and corresponding "small" value exists too
   * then take arr of the variant ids and push a new id in it and return;
   * else create a new array of the varaint id and return;
   */
  variantIdsMaker(optionValue: OptionValue, optionTypesHash: OptionTypesHash,
    optionType: OptionType, variant: Variant) {

    const currespondingOptionValues = this.getOtherOptionValues(optionValue, optionType);
    if (optionTypesHash[optionType.name] != null && optionTypesHash[optionType.name][optionValue.value] != null) {
      const variantArr = optionTypesHash[optionType.name][optionValue.value].variantIds;
      variantArr.push({ [variant.id]: currespondingOptionValues });
      return variantArr;
    } else {
      return Array.of({ [variant.id]: currespondingOptionValues });
    }
  }

  /**
   *
   *
   * @param {any} optionValue
   * @param {any} currOptionType
   * @returns
   *
   * @memberof VariantParserService
   */
  getOtherOptionValues(optionValue, currOptionType) {
    const correspondingOptionValues: any = [];
    for (let i = 0; i < this.currVariantOptionValues.length; i++) {
      if (this.currVariantOptionValues[i].option_type.name !== currOptionType.name) {
        correspondingOptionValues.push({ [this.currVariantOptionValues[i].option_type.name]: this.currVariantOptionValues[i].value });
      }
    }
    return correspondingOptionValues;
  }
}

