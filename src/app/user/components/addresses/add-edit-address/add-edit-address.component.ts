import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AddressService } from '../../../../checkout/address/services/address.service';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-add-edit-address',
  templateUrl: './add-edit-address.component.html',
  styleUrls: ['./add-edit-address.component.scss']
})
export class AddEditAddressComponent implements OnInit {
  addressForm: FormGroup;
  states: any;
  @Input() isEditAddrPressed: boolean;
  @Input() addressParams: any;
  @Output() isAddressEdited: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input() stateName: any;

  constructor(private fb: FormBuilder,
    private addrService: AddressService,
    private toastrService: ToastrService,
    private userService: UserService,
  ) {
    this.addressForm = addrService.initAddressForm();

    this.addrService.getAllStates().subscribe(data => {
      this.states = data.states;
    });
  }

  ngOnInit() {
    if (this.isEditAddrPressed) {
      this.fillAddress(this.addressForm);
    }
  }

  onSubmit() {
    const address = this.addressForm.value;
    for (const state of this.states) {
      if (state.name === address.state_name) {
        address['state_id'] = state.id;
        address['country_id'] = state.country_id;
        address['state_name'] = state.name;
        break;
      }
    }
    if (this.addressForm.valid) {
      if (this.isEditAddrPressed) {
        this.addressParams.user.ship_address = address;
        this.userService.updateUserAddress(this.addressParams)
          .subscribe((res: any) => {
            this.navigatePage();
            this.toastrService.success(res.status, 'Success!')
          })

      } else {
        this.addressParams.user.ship_address = address;
        this.userService.createUserAddress(this.addressParams)
          .subscribe((res: any) => {
            this.navigatePage();
            this.toastrService.success(res.status, 'Success!')
          })
      }
    } else {
      this.toastrService.error('Some fields are blank!', 'Unable to save address!');
    }
  }

  fillAddress(addressForm) {
    const existingAddress = this.addressParams.user.ship_address;
    addressForm.get('zipcode').setValue(existingAddress.zipcode);
    addressForm.get('address2').setValue(existingAddress.address2);
    addressForm.get('city').setValue(existingAddress.city);
    addressForm.get('state_name').setValue(existingAddress.state.name);
    addressForm.get('firstname').setValue(existingAddress.firstname);
    addressForm.get('lastname').setValue(existingAddress.lastname);
    addressForm.get('address1').setValue(existingAddress.address1);
    addressForm.get('phone').setValue(existingAddress.phone);
  }
  navigatePage() {
    this.isAddressEdited.emit(true)
  }
}
