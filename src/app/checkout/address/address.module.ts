import { AddressComponent } from './address.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AddAddressComponent } from './add-address/add-address.component';


@NgModule({
  declarations: [
    AddressComponent,
    AddAddressComponent
  ],
  exports: [],
  imports: [
    CommonModule
  ],
  providers: []
})
export class AddressModule { }
