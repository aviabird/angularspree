import { Address } from './../../../core/models/address';
import { Store } from '@ngrx/store';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AddressService } from '../services/address.service';
import { AuthActions } from '../../../auth/actions/auth.actions';
import { getAuthStatus } from '../../../auth/reducers/selectors';
import { CheckoutService } from '../../../core/services/checkout.service';
import { AppState } from '../../../interfaces';
import { CState } from '../../../core/models/state';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-address',
  templateUrl: './add-address.component.html',
  styleUrls: ['./add-address.component.scss']
})
export class AddAddressComponent implements OnInit, OnDestroy {
  addressForm: FormGroup;
  emailForm: FormGroup;
  isAuthenticated: boolean;
  states: Array<CState> = [];
  subscriptionList$: Array<Subscription> = [];
  @Input() addressEdit: Address;
  @Input() orderNumber: string
  @Output() addressEdited: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(
    private checkoutService: CheckoutService,
    private addrService: AddressService,
    private store: Store<AppState>,
    private toastrService: ToastrService
  ) {
    this.addressForm = addrService.initAddressForm();
    this.emailForm = addrService.initEmailForm();
  }

  ngOnInit() {
    this.subscriptionList$.push(
      this.addrService.getAllStates().subscribe(states => {
        this.states = states;
      }),
      this.store.select(getAuthStatus).subscribe(auth => {
        this.isAuthenticated = auth;
      })
    );

    if (this.addressEdit != null) {
      this.existingAddress(this.addressForm)
    }
  }

  ngOnDestroy() {
    this.subscriptionList$.forEach(sub$ => sub$.unsubscribe());
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
    // TODO: Refactor this 🙏
    if (this.addressForm.valid) {
      if (this.addressEdit != null) {
        if (this.isAuthenticated) {
          this.subscriptionList$.push(
            this.addrService
              .updateAddress(address, this.addressEdit.id, this.orderNumber)
              .subscribe(_ => this.showEdited())
          )
        }
      } else if (this.addressEdit === null) {
        if (this.isAuthenticated) {
          addressAttributes = this.addrService.createAddresAttributes(address);
        } else {
          const email = this.getEmailFromUser();
          addressAttributes = this.addrService.createGuestAddressAttributes(
            address,
            email
          );
        }
        this.subscriptionList$.push(this.checkoutService.updateOrder(addressAttributes).subscribe());
      }
    } else {
      this.toastrService.error('Some fields are blank!', 'Unable to save address!');
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

  showEdited() {
    this.addressEdited.emit(true)
  }
}
