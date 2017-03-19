import { Subscription } from 'rxjs/Rx';
import { AddressService } from './../services/address.service';
import { CheckoutService } from './../../../core/services/checkout.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-add-address',
  templateUrl: './add-address.component.html',
  styleUrls: ['./add-address.component.scss']
})
export class AddAddressComponent implements OnInit, OnDestroy {

  updateSub$: Subscription;
  addressForm: FormGroup;

  constructor(private fb: FormBuilder, private checkoutService: CheckoutService, private addrService: AddressService) {
    this.addressForm = addrService.initAddressForm();
  }

  ngOnInit() {
  }

  onSubmit() {
    const address = this.addressForm.value;
    const addressAttributes = this.addrService.createAddresAttributes(address);
    this.checkoutService.updateOrder(addressAttributes)
      .subscribe();
  }

  ngOnDestroy() {
    this.updateSub$.unsubscribe();
  }

}
