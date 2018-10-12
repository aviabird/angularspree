import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Address } from '../../../core/models/address';
import { Store } from '@ngrx/store';
import { AppState } from '../../../interfaces';
import { UserActions } from '../../../user/actions/user.actions';

@Component({
  selector: 'app-saved-address',
  templateUrl: './saved-address.component.html',
  styleUrls: ['./saved-address.component.scss']
})
export class SavedAddressComponent implements OnInit {

  @Input() addressList;
  selectedIndex: number;
  @Output() getSelectedAddress = new EventEmitter<Object>();
  @Output() editButtonPressed = new EventEmitter<Object>();

  constructor(
    private store: Store<AppState>,
    private userAction: UserActions) { }

  ngOnInit() {
  }

  editAddress(selectedAddress) {
    this.editButtonPressed.emit(selectedAddress)
  }

  deleteAddress(addressId: string) {
    this.store.dispatch(this.userAction.deleteUserAddress(addressId));
  }

  selectedDeliveryAddress(address: Address) {
    this.getSelectedAddress.emit(address);
  }

}
