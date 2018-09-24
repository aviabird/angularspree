import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from '../../services/user.service';
import { AddressService } from '../../../checkout/address/services/address.service';
import { Address } from '../../../core/models/address';

@Component({
  selector: 'app-addresses',
  templateUrl: './addresses.component.html',
  styleUrls: ['./addresses.component.scss']
})
export class AddressesComponent implements OnInit {

  userAddresses$: Observable<Array<Address>>
  isEditAddrPressed: boolean;
  selectedAddress: Address;

  constructor(private userService: UserService,
    private addressService: AddressService) { }

  ngOnInit() {
    this.getUserAddresses();
  }

  getUserAddresses() {
    //  this.userAddresses$ = this.addressService.getUserAddresses()
  }

  editAddress(event) {
    this.isEditAddrPressed = event.isEditButtonPressed;
    this.selectedAddress = event.address;
  }

  cancelAddressEdit() {
    this.isEditAddrPressed = false;
  }

  buildAddressParams() {
    return this.selectedAddress;
  }
  
  addressEditedDone() {
    this.isEditAddrPressed = false;
  }
}
