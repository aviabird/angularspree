import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CheckoutService } from '../../../../../core/services/checkout.service';

import { Observable } from 'rxjs';
@Component({
  selector: 'app-check-pincode',
  templateUrl: './check-pincode.component.html',
  styleUrls: ['./check-pincode.component.scss']
})
export class CheckPincodeComponent implements OnInit {
  checkPincodeForm: FormGroup;
  isCodAvilable$: Observable<any>;

  constructor(private fb: FormBuilder,
    private checkoutService: CheckoutService) { }

  ngOnInit() {
    this.initForm();
  }
  initForm() {
    const pincode = '';
    this.checkPincodeForm = this.fb.group({
      'pincode': [pincode, Validators.required]
    });
  }

  checkCodAvilability() {
    // if (this.checkPincodeForm.valid) {
    //   const pincode = this.checkPincodeForm.value.pincode;
    //   this.isCodAvilable$ = this.checkoutService.shipmentAvailability(pincode)
    // }
  }
}
