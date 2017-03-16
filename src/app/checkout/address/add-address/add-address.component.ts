import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-address',
  templateUrl: './add-address.component.html',
  styleUrls: ['./add-address.component.scss']
})
export class AddAddressComponent implements OnInit {

  addressForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.addressForm = this.initAddressForm();
  }

  ngOnInit() {
  }

  initAddressForm() {
    return this.fb.group({
      'firstname': ['', Validators.required],
      'lastname': ['', Validators.required],
      'address1': ['', Validators.required],
      'address2': ['', Validators.required],
      'city': ['', Validators.required],
      'phone': ['', Validators.required],
      'zipcode': ['', Validators.required],
      'state_id': ['', Validators.required],
      'country_id': ['', Validators.required]
    });
  }

  onSubmit() {
    console.log('address', this.addressForm.value);
  }


}
