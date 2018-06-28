import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cash-on-delivery',
  templateUrl: './cash-on-delivery.component.html',
  styleUrls: ['./cash-on-delivery.component.scss']
})
export class CashOnDeliveryComponent implements OnInit {

  @Output() payOnDelivery: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  onPay() {
    this.payOnDelivery.emit(true);
  }

}
