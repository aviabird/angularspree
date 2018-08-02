import { Component, OnInit, Input } from '@angular/core';
import { Order } from '../../../../core/models/order';
import { LineItem } from '../../../../core/models/line_item';
@Component({
  selector: 'app-order-list-item',
  templateUrl: './order-list-item.component.html',
  styleUrls: ['./order-list-item.component.scss']
})
export class OrderListItemComponent implements OnInit {
  @Input() orders;

  constructor() { }

  ngOnInit() {
  }

  getProductImageUrl(line_item: LineItem) {
    return line_item.variant.images[0].small_url;
  }
}
