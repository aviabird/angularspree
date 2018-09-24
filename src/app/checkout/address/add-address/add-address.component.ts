import { Address } from './../../../core/models/address';
import { Store } from '@ngrx/store';
import { FormGroup } from '@angular/forms';
import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AddressService } from '../services/address.service';
import { getAuthStatus } from '../../../auth/reducers/selectors';
import { AppState } from '../../../interfaces';
import { Subscription } from 'rxjs';
import { UserActions } from '../../../user/actions/user.actions';
import { CState } from '../../../core/models/state';
import { getStates } from '../../../user/reducers/selector';
import { Country } from '../../../core/models/country';


@Component({
  selector: 'app-add-address',
  templateUrl: './add-address.component.html',
  styleUrls: ['./add-address.component.scss']
})
export class AddAddressComponent implements OnInit, OnDestroy {
  addressForm: FormGroup;
  emailForm: FormGroup;
  isAuthenticated: boolean;
  states: CState[];
  countryId: string;
  subscriptionList$: Array<Subscription> = [];

  @Input() addressEdit: Address;
  @Input() orderNumber: string;
  @Input() countries: Country[];
  @Output() addressEdited = new EventEmitter<boolean>();
  @Output() cancelAddress = new EventEmitter<boolean>();

  constructor(
    private addressService: AddressService,
    private store: Store<AppState>,
    private toastrService: ToastrService,
    private userActions: UserActions
  ) { }

  ngOnInit() {
    this.addressForm = this.addressService.initAddressForm();

    this.subscriptionList$.push(
      this.store.select(getAuthStatus).subscribe(auth => {
        this.isAuthenticated = auth;
      })
    );
  }

  onSubmit() {
    const address = this.addressForm.value;
    if (this.addressForm.valid) {
      for (const state of this.states) {
        if (state.name === address.state_name) {
          address['state_id'] = state.id;
          address['country_id'] = this.countryId;
          address['state_name'] = state.name;
          break;
        }
      }

      if (this.addressEdit != null) {
        if (this.isAuthenticated) {

        }
      } else if (this.addressEdit === null) {
        if (this.isAuthenticated) {
          this.subscriptionList$.push(
            this.addressService.saveUserAddress(address).
              subscribe(_ => {
                this.closeAddressForm();
                this.store.dispatch(this.userActions.fetchUserAddress());
              })
          );
        }
      }
    } else {
      this.toastrService.error('Some fields are blank!', 'Unable to save address!');
    }
  }

  existingAddress(addressForm) {
    addressForm.get('zipcode').setValue(this.addressEdit.zip_code);
    addressForm.get('address2').setValue(this.addressEdit.address_line_2);
    addressForm.get('city').setValue(this.addressEdit.city);
    addressForm.get('state_name').setValue(this.addressEdit.state.name);
    addressForm.get('firstname').setValue(this.addressEdit.first_name);
    addressForm.get('lastname').setValue(this.addressEdit.last_name);
    addressForm.get('address1').setValue(this.addressEdit.address_line_1);
    addressForm.get('phone').setValue(this.addressEdit.phone);
  }

  showEdited() {
    this.addressEdited.emit(true)
  }

  closeAddressForm() {
    return this.cancelAddress.emit(false);
  }

  selectedCountry(countryId: string) {
    this.countryId = countryId;
    this.store.dispatch(this.userActions.fetchStates(countryId));
    this.subscriptionList$.push(
      this.store.select(getStates).subscribe(state => {
        this.states = state;
      })
    );
  }

  ngOnDestroy() {
    this.subscriptionList$.forEach(sub$ => sub$.unsubscribe());
  }
}
