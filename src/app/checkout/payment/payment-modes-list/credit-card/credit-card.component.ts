import { Component, OnInit, Input } from '@angular/core';
import * as CryptoJS from 'crypto-js';
import { CheckoutService } from '../../../../core/services/checkout.service';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'app-credit-card',
  templateUrl: './credit-card.component.html',
  styleUrls: ['./credit-card.component.scss']
})
export class CreditCardComponent implements OnInit {

  constructor(private checkOutService: CheckoutService) { }
  @Input() paymentAmount: number;
  @Input() orderNumber: number;

  ngOnInit() {
  }

  onPay() {
    // To do static values should be come from enviornment or of config.
    const testSalt = 'eCwWELxi';
    const testKey = 'gtKFFx';
    const successUrl = `${environment.apiEndpoint}auth/handle_payment`;
    const failureUrl = 'http://localhost:4200/'; //hard coded for now.

    const hashParams = {
      key: testKey,
      txnid: `${this.orderNumber}`,
      amount: this.paymentAmount,
      productinfo: 'Products name', //hard codded
      firstname: 'Angularspree', //hard codded
      email: JSON.parse(localStorage.getItem('user')).email,
    }

    const paramsList = `${hashParams.key}|${hashParams.txnid}|${hashParams.amount}|${hashParams.productinfo}|${hashParams.firstname}|${hashParams.email}|||||||||||${testSalt}`;
    const encryptedHash = CryptoJS.SHA512(paramsList);
    const hashString = CryptoJS.enc.Hex.stringify(encryptedHash)

    const paramsToPost = {
      key: hashParams.key,
      txnid: hashParams.txnid,
      amount: hashParams.amount,
      productinfo: hashParams.productinfo,
      firstname: hashParams.firstname,
      email: hashParams.email,
      phone: '1234567890', //hard codded
      surl: successUrl,
      furl: failureUrl,
      hash: hashString
    }
    this.checkOutService.makePayment(paramsToPost)
      .subscribe(response => {
        response = response
        window.open(response.url, "_self");
      })
    //ToDo currently window is opened in the curret page only. 
  }
}
