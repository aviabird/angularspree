import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart/cart.component';
import { AddressComponent } from './address/address.component';
import { PaymentComponent } from './payment/payment.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CartComponent, AddressComponent, PaymentComponent]
})
export class CheckoutModule { }
