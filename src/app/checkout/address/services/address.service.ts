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
      'zipcode': [10001, Validators.required],
      'state_id': [3561, Validators.required],
      'country_id': [232, Validators.required]
    });
  }

  initEmailForm() {
    return this.fb.group({
      'email': ['', Validators.required]
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

  createGuestAddressAttributes(address, email) {
    return {
      'order': {
        'email': email,
        'bill_address_attributes': address,
        'ship_address_attributes': address
      }
    };
  }

}
