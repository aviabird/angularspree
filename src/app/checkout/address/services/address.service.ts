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

  createGuestAddressAttributes(address) {
    return {
      'order': {
        'email': 'cshekhar@aviabird.com', // in future take this email from user input in case of guest user.
        'bill_address_attributes': address,
        'ship_address_attributes': address
      }
    };
  }



}
