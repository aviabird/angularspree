import { Store } from '@ngrx/store';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AddressService } from '../services/address.service';
import { AuthActions } from '../../../auth/actions/auth.actions';
import { getAuthStatus, getCurrentUser } from '../../../auth/reducers/selectors';
import { CheckoutService } from '../../../core/services/checkout.service';
import { AppState } from '../../../interfaces';
import { User } from '../../../core/models/user';
import { Observable } from 'rxjs';
import { UserActions } from '../../../user/actions/user.actions';

@Component({
  selector: 'app-add-address',
  templateUrl: './add-address.component.html',
  styleUrls: ['./add-address.component.scss']
})
export class AddAddressComponent implements OnInit {
  addressForm: FormGroup;
  emailForm: FormGroup;
  isAuthenticated: boolean;
  states: any;
  @Input() addressEdit: any
  @Input() orderNumber: string
  @Output() addressEdited = new EventEmitter<boolean>();
  @Output() cancelAddress = new EventEmitter<boolean>();
  currentUser$: Observable<User>;

  constructor(
    private fb: FormBuilder,
    private authActions: AuthActions,
    private checkoutService: CheckoutService,
    private addrService: AddressService,
    private store: Store<AppState>,
    private toastrService: ToastrService,
    private userActions: UserActions
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
    for (const state of this.states) {
      if (state.name === address.state_name) {
        address['state_id'] = 1987;
        address['country_id'] = 105;
        address['state_name'] = 'Maharashtra';
        break;
      }
    }
    if (this.addressForm.valid) {
      if (this.addressEdit != null) {
        if (this.isAuthenticated) {
          this.addrService.updateAddress(address, this.addressEdit.id, this.orderNumber)
            .subscribe(data => {
              this.closeAddressForm();
            })
        }
      } else if (this.addressEdit === null) {
        if (this.isAuthenticated) {
          this.addrService.saveUserAddress(address).
            subscribe(_ => {
              this.closeAddressForm();
              this.store.dispatch(this.userActions.fetchUserAddress());
            });
        }
        // this.checkoutService.updateOrder(addressAttributes).subscribe();
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

  closeAddressForm() {
    return this.cancelAddress.emit(false);
  }
}
