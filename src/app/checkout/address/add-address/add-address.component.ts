import { getAuthStatus } from './../../../auth/reducers/selectors';
import { AppState } from './../../../interfaces';
import { Store } from '@ngrx/store';
import { AuthActions } from './../../../auth/actions/auth.actions';
import { AddressService } from './../services/address.service';
import { CheckoutService } from './../../../core/services/checkout.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import { Address } from '../../../core/models/address';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-address',
  templateUrl: './add-address.component.html',
  styleUrls: ['./add-address.component.scss']
})
export class AddAddressComponent implements OnInit, OnDestroy {
  addressForm: FormGroup;
  emailForm: FormGroup;
  isAuthenticated: boolean;
  states: any;
  @Input() addressEdit: any
  @Input() orderNumber: string
  @Output() addressEdited: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(
    private fb: FormBuilder,
    private authActions: AuthActions,
    private checkoutService: CheckoutService,
    private addrService: AddressService,
    private store: Store<AppState>,
    private toastrService: ToastrService
  ) {
    this.addressForm = addrService.initAddressForm();
    this.emailForm = addrService.initEmailForm();
    this.store.select(getAuthStatus).subscribe(auth => {
      this.isAuthenticated = auth;
    });

    this.addrService.getAllStates().subscribe(data => {
      this.states = data.states;
    });
  }

  ngOnInit() {
    if (this.addressEdit != null) {
      this.existingAddress(this.addressForm)
    }

  }

  onSubmit() {

    const address = this.addressForm.value;
    let addressAttributes;
    for (const state of this.states) {
      if (state.name === address.state_name) {
        address['state_id'] = state.id;
        address['country_id'] = state.country_id;
        address['state_name'] = state.name;
        break;
      }
    }

    if (this.addressEdit != null) {
      if (this.isAuthenticated) {
        this.addrService.updateAddress(address, this.addressEdit.id, this.orderNumber)
          .subscribe(data => {
            this.showEdited();
            this.toastrService.success('Address Updated SuccesFully!', 'Success');
          },
            error => {
              this.toastrService.error('Address Could not be Updated', 'Failed');
            }
          )
      }
    } else if (this.addressEdit === null) {
      if (this.isAuthenticated) {
        addressAttributes = this.addrService.createAddresAttributes(address);
      }
      else {
        const email = this.getEmailFromUser();
        addressAttributes = this.addrService.createGuestAddressAttributes(
          address,
          email
        );
      }
      this.checkoutService.updateOrder(addressAttributes).subscribe();
    }
  }

  private getEmailFromUser() {
    return this.emailForm.value.email;
  }

  existingAddress(addressForm) {
    addressForm.get('zipcode').setValue(this.addressEdit.zipcode);
    addressForm.get('address2').setValue(this.addressEdit.address2);
    addressForm.get('city').setValue(this.addressEdit.city);
    addressForm.get('state_name').setValue(this.addressEdit.state.name);
    addressForm.get('firstname').setValue(this.addressEdit.firstname);
    addressForm.get('lastname').setValue(this.addressEdit.lastname);
    addressForm.get('address1').setValue(this.addressEdit.address1);
    addressForm.get('phone').setValue(this.addressEdit.phone);
  }

  ngOnDestroy() { }

  showEdited() {
    this.addressEdited.emit(true)
  }
}
