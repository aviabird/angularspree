import { Component, OnInit, Input } from '@angular/core';
import { Order } from '../../../../core/models/order';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'app-order-list-item',
  templateUrl: './order-list-item.component.html',
  styleUrls: ['./order-list-item.component.scss']
})
export class OrderListItemComponent implements OnInit {
  @Input() order: Order;

  constructor() { }

  ngOnInit() {
  }

  getProductImageUrl(url) {
    return environment.API_ENDPOINT + url;
  }

}
