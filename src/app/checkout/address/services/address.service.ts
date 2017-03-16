import { Injectable } from '@angular/core';

@Injectable()
export class AddressService {
  constructor() {}

  createAddresAttributes(address) {
    return {
      'order': {
        'bill_address_attributes': address,
        'ship_address_attributes': address
      }
    };
  }

}
