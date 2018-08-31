
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { CheckoutService } from './../../core/services/checkout.service';
import { getShipAddress, getOrderState, getOrderNumber } from './../reducers/selectors';
import { AppState } from './../../interfaces';
import { Store } from '@ngrx/store';
import { Address } from './../../core/models/address';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { AddressService } from './services/address.service';
import { UserActions } from '../../user/actions/user.actions';
import { getUserAddressess } from '../../user/reducers/selector';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss'],
})
export class AddressComponent implements OnInit, OnDestroy {
  stateSub$: Subscription;
  orderState: string;
  orderNumber$: Observable<number>;
  shipAddress: Address;
  isEditButtonPressed: boolean;
  addressData: Address;
  isAddNewAddress: boolean;
  userAddresses$: Observable<Array<Address>>;
  isUserSelectedAddress: boolean;

  constructor(private store: Store<AppState>,
    private checkoutService: CheckoutService,
    private addressService: AddressService,
    private router: Router,
    private userActions: UserActions) {
    // this.orderNumber$ = this.store.select(getOrderNumber);
    // this.shipAddress$ = this.store.select(getShipAddress);
    // this.stateSub$ = this.store.select(getOrderState)
    // .subscribe(state => this.orderState = state);

    this.store.dispatch(this.userActions.fetchUserAddress());
    this.userAddresses$ = this.store.select(getUserAddressess);
  }

  ngOnInit() {
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
    this.isUserSelectedAddress = true
  }
}
