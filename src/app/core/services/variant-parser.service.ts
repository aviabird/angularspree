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

  getOptionsToDisplay(variants: Variant[], optionTypes: OptionType[]) {
    console.log(variants, optionTypes);
    let optionTypesHash = {};

    optionTypes.forEach(optionType => {
      variants.forEach(variant => {
        variant.option_values.forEach(optionValue => {
          if (optionValue.option_type_name === optionType.name) {
            Object.assign(optionTypesHash, this.singleOptionTypeHashMaker(optionValue, optionTypesHash, optionType, variant));
          }
        });
      });
    });
    return optionTypesHash;
  }

  singleOptionTypeHashMaker(optionValue, optionTypesHash, optionType, variant){
    let optionTypeName: string = optionType.name;
    return Object.assign({}, {
        optionTypeName: this.optionMaker(optionValue, optionTypesHash, optionType, variant)
      }
    );
  }



  optionMaker(option_value: OptionValue, xyz, value, element) {
    let name = option_value.name;
    return Object.assign({}, { name: this.optionInnerValueMaker(option_value, xyz, value, element) })
  }


  optionInnerValueMaker(option_value: OptionValue, xyz, value, element) {
    return Object.assign({}, {
      option_value: option_value,
      variant_ids: this.variantIdsMaker(xyz, value, element)
    });
  }

  variantIdsMaker(xyz, value, element) {
    if (xyz[value.name] != null) {
      let tempArr = xyz[value.name].variant_ids;
      tempArr.push(element.id);
      return tempArr;
    } else {
      return Array.of(element.id);
    }
  }
}
