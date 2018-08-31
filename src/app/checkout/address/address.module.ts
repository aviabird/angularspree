import { RouterModule } from '@angular/router';
import { AddressService } from './services/address.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddressComponent } from './address.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AddAddressComponent } from './add-address/add-address.component';
import { DeliveryAddressComponent } from './delivery-address/delivery-address.component';
import { DeliveryOptionsComponent } from './delivery-options/delivery-options.component';
import { SharedModule } from '../../shared';


@NgModule({
  declarations: [
    AddressComponent,
    AddAddressComponent,
    DeliveryAddressComponent,
    DeliveryOptionsComponent
  ],
  exports: [],
  imports: [
    RouterModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
  ],
  providers: [
    AddressService
  ]
})
export class AddressModule { }
