import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Address } from '../../../core/models/address';

@Component({
  selector: 'app-saved-address',
  templateUrl: './saved-address.component.html',
  styleUrls: ['./saved-address.component.scss']
})
export class SavedAddressComponent implements OnInit {

  @Input() addressList;
  selectedIndex: number;

  @Output() getSelectedAddress = new EventEmitter<Object>();
  constructor() { }

  ngOnInit() {
  }

  editAddress(selectedAddress) {
    // this.isEditButtonPressed.emit({ address: selectedAddress, isEditButtonPressed: true })
  }

  selectedDeliveryAddress(address: Address) {
    this.getSelectedAddress.emit(address);
  }

}
