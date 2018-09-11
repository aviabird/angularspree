import { Component, OnDestroy, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AddressService } from '../../../../checkout/address/services/address.service';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../../../services/user.service';
import { Address } from '../../../../core/models/address';

import { Store } from '@ngrx/store';
import { AppState } from '../../../../interfaces';
import { getAuthStatus } from '../../../../auth/reducers/selectors';
@Component({
  selector: 'app-add-edit-address',
  templateUrl: './add-edit-address.component.html',
  styleUrls: ['./add-edit-address.component.scss']
})
export class AddEditAddressComponent implements OnInit, OnDestroy {
  addressForm: FormGroup;
  states: Array<CState> = [];
  isAuthenticated: boolean;
  @Input() isEditAddrPressed: boolean;
  @Input() addressParams: Address;
  @Output() isAddressEdited: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input() stateName: string;
  subscriptionList$: Array<Subscription> = [];

  constructor(private fb: FormBuilder,
    private addrService: AddressService,
    private toastrService: ToastrService,
    private userService: UserService, private store: Store<AppState>
  ) {
    this.addressForm = addrService.initAddressForm();
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
    if (this.isEditAddrPressed) {
      this.fillAddress(this.addressForm);
    }
  }

  ngOnDestroy() {
    this.subscriptionList$.forEach(sub$ => sub$.unsubscribe());
  }

  onSubmit() {
    const address = this.addressForm.value;
    for (const state of this.states) {
      if (state.name === address.state_name) {
        address['state_id'] = state.id;
        address['country_id'] = state.country_id;
        address['state_name'] = state.name;
        break;
      }
    }
    if (this.addressForm.valid) {
      if (this.isEditAddrPressed) {
        this.addressParams.user.ship_address = address;
        this.subscriptionList$.push(
          this.userService.updateUserAddress(this.addressParams)
            .subscribe((res: any) => {
              this.navigatePage();

            })
        )
      } else {
        this.addressParams.user.ship_address = address;
        this.subscriptionList$.push(
          this.userService.createUserAddress(this.addressParams)
            .subscribe(_ => this.navigatePage())
        )
      }
    } else {
      this.toastrService.error('Some fields are blank!', 'Unable to save address!');
    }
  }

  fillAddress(addressForm) {
    const existingAddress: Address = this.addressParams;
    addressForm.get('zipcode').setValue(existingAddress.zip_code);
    addressForm.get('address2').setValue(existingAddress.address_line_2);
    addressForm.get('city').setValue(existingAddress.city);
    addressForm.get('firstname').setValue(existingAddress.first_name);
    addressForm.get('lastname').setValue(existingAddress.last_name);
    addressForm.get('address1').setValue(existingAddress.address_line_1);
    addressForm.get('phone').setValue(existingAddress.phone);
  }

  navigatePage() {
    this.isAddressEdited.emit(true)
  }
}
