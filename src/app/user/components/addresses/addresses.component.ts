import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-addresses',
  templateUrl: './addresses.component.html',
  styleUrls: ['./addresses.component.scss']
})
export class AddressesComponent implements OnInit {

  userDetails$: Observable<any>
  isEditAddrPressed: boolean;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getUser();
  }
  getUser() {
    this.userDetails$ = this.userService.getUser();
  }

  editAddress() {
    this.isEditAddrPressed = true;
  }

  cancelAddressEdit() {
    this.isEditAddrPressed = false;
  }

  buildAddressParams(userDetails) {
    const params = {
      user: {
        email: userDetails.email,
        ship_address: userDetails.ship_address
      }
    }
    return params;
  }
  addressEditedDone() {
    this.userDetails$ = this.userService.getUser();
    this.isEditAddrPressed = false;
  }
}
