import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-saved-address',
  templateUrl: './saved-address.component.html',
  styleUrls: ['./saved-address.component.scss']
})
export class SavedAddressComponent implements OnInit {

  @Input() userAddresses;
  @Output() isEditButtonPressed = new EventEmitter<Object>();
  constructor() { }

  ngOnInit() {
  }

  editAddress(selectedAddress) {
    this.isEditButtonPressed.emit({ address: selectedAddress, isEditButtonPressed: true })
  }

}
