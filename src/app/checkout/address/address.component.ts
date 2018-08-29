
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

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss'],
})
export class AddressComponent implements OnInit, OnDestroy {
  stateSub$: Subscription;
  orderState: string;
  orderNumber$: Observable<number>;
  shipAddress$: Observable<Address>;
  isEditButtonPressed: boolean;
  addressData: Address;
  isAddNewAddress: boolean;
  userAddresses$: Observable<Array<Address>>;
  showDeliverhere: boolean;
  selectedIndex: number;

  constructor(private store: Store<AppState>,
    private checkoutService: CheckoutService,
    private addressService: AddressService,
    private router: Router) {
    // this.orderNumber$ = this.store.select(getOrderNumber);
    this.shipAddress$ = this.store.select(getShipAddress);
    // this.stateSub$ = this.store.select(getOrderState)
    // .subscribe(state => this.orderState = state);
  }

  ngOnInit() {
    this.getUserAddresses();
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

  getUserAddresses() {
    this.userAddresses$ = this.addressService.getUserAddresses()
  }

  selectedAddress(index: number) {
    this.showDeliverhere = true;
    this.selectedIndex = index;
  }

  selectedDeliveryAddress(address: Address) {
  }

  editAddress(selectedAddress) {
    // this.isEditButtonPressed.emit({ address: selectedAddress, isEditButtonPressed: true })
  }
}
