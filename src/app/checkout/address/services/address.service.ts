import { FormBuilder, Validators } from '@angular/forms';
import { Injectable } from '@angular/core';

@Injectable()
export class AddressService {
  constructor(private fb: FormBuilder) {}

  initAddressForm() {
    return this.fb.group({
      'firstname': ['', Validators.required],
      'lastname': ['', Validators.required],
      'address1': ['', Validators.required],
      'address2': ['', Validators.required],
      'city': ['', Validators.required],
      'phone': ['', Validators.required],
      'zipcode': ['', Validators.required],
      'state_id': [3561, Validators.required],
      'country_id': [232, Validators.required]
    });
  }

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
