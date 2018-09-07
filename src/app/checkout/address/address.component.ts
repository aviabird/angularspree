
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { CheckoutService } from './../../core/services/checkout.service';
import { getShipAddress, getOrderState, getOrderNumber, getOrderId } from './../reducers/selectors';
import { AppState } from './../../interfaces';
import { Store } from '@ngrx/store';
import { Address } from './../../core/models/address';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { AddressService } from './services/address.service';
import { UserActions } from '../../user/actions/user.actions';
import { getUserAddressess, getCountries } from '../../user/reducers/selector';
import { Country } from '../../core/models/country';
import { CheckoutActions } from '../actions/checkout.actions';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss'],
})
export class AddressComponent implements OnInit, OnDestroy {
  stateSub$: Subscription;
  orderState: string;
  orderId: number;
  shipAddress: Address;
  isEditButtonPressed: boolean;
  addressData: Address;
  isAddNewAddress: boolean;
  userAddresses$: Observable<Array<Address>>;
  isUserSelectedAddress: boolean;
  countries$: Observable<Country[]>;

  constructor(private store: Store<AppState>,
    private checkoutService: CheckoutService,
    private addressService: AddressService,
    private router: Router,
    private userActions: UserActions,
    private checkoutAction: CheckoutActions) {
    this.store.dispatch(this.userActions.fetchUserAddress());
  }

  ngOnInit() {
    this.store.select(getOrderId).subscribe(orderId => this.orderId = orderId);
    // this.stateSub$ = this.store.select(getOrderState)
    //   .subscribe(state => this.orderState = state);

    this.userAddresses$ = this.store.select(getUserAddressess);
    this.store.dispatch(this.userActions.fetchCountries());
    this.countries$ = this.store.select(getCountries);
  }

  checkoutToPayment() {
    if (this.orderState === 'delivery' || this.orderState === 'address') {
      this.checkoutService.changeOrderState().pipe(
        tap(() => {
          this.router.navigate(['/checkout', 'payment']);
        }))
        .subscribe();
    } else {
      this.router.navigate(['/checkout', 'payment']);
    }
  }


  ngOnDestroy() {
    if (this.orderState === 'delivery') {
      this.checkoutService.changeOrderState()
        .subscribe();
    }
    // this.stateSub$.unsubscribe();
  }

  userAddressEdit(addressData) {
    this.addressData = addressData
    this.isEditButtonPressed = true;
  }

  addressEditedDone() {
    this.isEditButtonPressed = false;
  }

  addNewAddress() {
    this.isAddNewAddress = true;
  }

  cancelAddress(event) {
    return this.isAddNewAddress = event;
  }

  editAddress(selectedAddress) {
    // this.isEditButtonPressed.emit({ address: selectedAddress, isEditButtonPressed: true })
  }

  getSelectedAddress(event) {
    this.shipAddress = event;
    this.isUserSelectedAddress = true;
    this.store.dispatch(this.checkoutAction.bindAddress(this.shipAddress, this.orderId))
  }

  changeAddress() {
    this.isUserSelectedAddress = false;
  }
}
