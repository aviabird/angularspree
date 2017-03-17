import { AddressService } from './../services/address.service';
import { CheckoutService } from './../../../core/services/checkout.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-address',
  templateUrl: './add-address.component.html',
  styleUrls: ['./add-address.component.scss']
})
export class AddAddressComponent implements OnInit {

  addressForm: FormGroup;

  constructor(private fb: FormBuilder, private checkoutService: CheckoutService, private addrService: AddressService) {
    this.addressForm = this.initAddressForm();
  }

  ngOnInit() {
  }

  initAddressForm() {
    return this.fb.group({
      'firstname': ['John', Validators.required],
      'lastname': ['Doe', Validators.required],
      'address1': ['7735 Old Georgetown Road', Validators.required],
      'address2': ['Bethesda', Validators.required],
      'city': ['New York', Validators.required],
      'phone': ['3014445002', Validators.required],
      'zipcode': ['10001', Validators.required],
      'state_id': [3561, Validators.required],
      'country_id': [232, Validators.required]
    });
  }

  onSubmit() {
    const address = this.addressForm.value;
    const addressAttributes = this.addrService.createAddresAttributes(address);
    this.checkoutService.updateOrder(addressAttributes)
      .subscribe();
  }


}
