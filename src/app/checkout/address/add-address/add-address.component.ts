import { Address } from './../../../core/models/address';
import { Store } from '@ngrx/store';
import { FormGroup } from '@angular/forms';
import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AddressService } from '../services/address.service';
import { getAuthStatus } from '../../../auth/reducers/selectors';
import { AppState } from '../../../interfaces';
import { Subscription, Observable } from 'rxjs';
import { UserActions } from '../../../user/actions/user.actions';
import { CState } from '../../../core/models/state';
import { getStates } from '../../../user/reducers/selector';
import { Country } from '../../../core/models/country';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-address',
  templateUrl: './add-address.component.html',
  styleUrls: ['./add-address.component.scss']
})
export class AddAddressComponent implements OnInit, OnDestroy {

  @Input() modifiedAddress: Address;
  @Input() orderNumber: string;
  @Input() countries: Country[];
  @Output() addressEdited = new EventEmitter<boolean>();
  @Output() cancelAddress = new EventEmitter<boolean>();
  addressForm: FormGroup;
  isAuthenticated: boolean;
  states$: Observable<Array<CState>>;
  countryId: string;
  stateId: string;
  subscriptionList$: Array<Subscription> = [];
  default: '';
  stateName: string;
  addressFromData: Address;
  isCountryChanged: boolean;
  isStateChanged: boolean;

  constructor(
    private addressService: AddressService,
    private store: Store<AppState>,
    private toastrService: ToastrService,
    private userActions: UserActions,
    private router: Router
  ) { }

  ngOnInit() {
    this.addressForm = this.addressService.initAddressForm();
    this.addressFromData = this.addressForm.value;
    this.subscriptionList$.push(
      this.store.select(getAuthStatus).subscribe(auth => {
        this.isAuthenticated = auth;
      })
    );

    if (this.modifiedAddress != null) {
      this.existingAddress(this.addressForm, this.modifiedAddress);
    }
  }

  onSubmit() {
    this.addressFromData = this.addressForm.value;
    const keys = Object.keys(this.addressFromData);
    if (this.isAuthenticated) {
      if (this.addressForm.valid) {
        if (this.modifiedAddress != null) {
          // for update address
          this.subscriptionList$.push(
            this.addressService.updateUserAddress(this.addressFromData, this.modifiedAddress.id).
              subscribe(_ => {
                this.closeAddressForm();
                this.store.dispatch(this.userActions.fetchUserAddress());
              })
          );
        } else {
          // for new address
          this.subscriptionList$.push(
            this.addressService.saveUserAddress(this.addressFromData).
              subscribe(_ => {
                this.closeAddressForm();
                this.store.dispatch(this.userActions.fetchUserAddress());
              })
          );
        }
      } else {
        keys.forEach(val => {
          const ctrl = this.addressForm.controls[val];
          if (!ctrl.valid) {
            this.pushErrorFor(val, null);
            ctrl.markAsTouched();
          };
        });
        this.toastrService.error('Some fields are blank/invalid', 'Error!');
      }
    } else {
      this.router.navigate(['auth', 'login'])
    }
  }

  showEdited() { this.addressEdited.emit(true) }

  closeAddressForm() { return this.cancelAddress.emit(false) }

  selectedCountry(countryId: string) {
    this.countryId = countryId;
    this.addressForm.get('state_id').reset();
    this.isCountryChanged = true;
    this.isStateChanged = true;
    this.fetchStates(countryId);
  }

  selectedState(stateId) {
    this.isStateChanged = true;
    this.stateId = stateId;
  }

  existingAddress(addressForm, formValue: Address) {
    addressForm.get('zip_code').setValue(formValue.zip_code);
    addressForm.get('address_line_2').setValue(formValue.address_line_2);
    addressForm.get('city').setValue(formValue.city);
    addressForm.get('state_id').setValue(formValue.state_id);
    addressForm.get('country_id').setValue(formValue.country_id);
    addressForm.get('first_name').setValue(formValue.first_name);
    addressForm.get('last_name').setValue(formValue.last_name);
    addressForm.get('address_line_1').setValue(formValue.address_line_1);
    addressForm.get('phone').setValue(formValue.phone);
    this.countryId = formValue.country_id;
    this.stateId = formValue.state_id;
    this.fetchStates(this.countryId);
  }

  private fetchStates(countryId: string) {
    this.store.dispatch(this.userActions.fetchStates(countryId));
    this.states$ = this.store.select(getStates);
  }

  private pushErrorFor(ctrl_name: string, msg: string) {
    this.addressForm.controls[ctrl_name].setErrors({ 'msg': msg });
  }

  ngOnDestroy() {
    this.subscriptionList$.forEach(sub$ => sub$.unsubscribe());
  }
}
