import { PaymentComponent } from './payment.component';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PaymentModesListComponent } from './payment-modes-list/payment-modes-list.component';
import { PaymentModeComponent } from './payment-modes-list/payment-mode/payment-mode.component';

@NgModule({
  declarations: [
    PaymentComponent,
    PaymentModesListComponent,
    PaymentModeComponent
  ],
  exports: [],
  imports: [
    RouterModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: []
})
export class PaymentModule { }
