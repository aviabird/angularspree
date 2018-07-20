import { Component, OnInit, Input } from '@angular/core';
import { Order } from '../../../../core/models/order';

@Component({
  selector: 'app-order-list-item',
  templateUrl: './order-list-item.component.html',
  styleUrls: ['./order-list-item.component.scss']
})
export class OrderListItemComponent implements OnInit {
  @Input() order;

  constructor() { }

  ngOnInit() {
    console.log('d',this.order)
  }

  getProductImageUrl(url) {
    return url;
  }
}
