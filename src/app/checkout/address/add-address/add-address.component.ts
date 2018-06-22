import { getAuthStatus } from './../../../auth/reducers/selectors';
import { AppState } from './../../../interfaces';
import { Store } from '@ngrx/store';
import { AuthActions } from './../../../auth/actions/auth.actions';
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
  addressForm: FormGroup;
  emailForm: FormGroup;
  isAuthenticated: boolean;
  states: any;

  constructor(
    private fb: FormBuilder,
    private authActions: AuthActions,
    private checkoutService: CheckoutService,
    private addrService: AddressService,
    private store: Store<AppState>
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

  ngOnInit() { }

  onSubmit() {
    const address = this.addressForm.value;
    let addressAttributes;
    for (const state of this.states) {
      if (state.name === address.state_name) {
        address['state_id'] = state.id;
        address['country_id'] = state.country_id
        break;
      }
    }

    if (this.isAuthenticated) {
      addressAttributes = this.addrService.createAddresAttributes(address);
    } else {
      const email = this.getEmailFromUser();
      addressAttributes = this.addrService.createGuestAddressAttributes(
        address,
        email
      );
    }
    this.checkoutService.updateOrder(addressAttributes).subscribe();
  }

  private getEmailFromUser() {
    return this.emailForm.value.email;
  }

  ngOnDestroy() { }
}
