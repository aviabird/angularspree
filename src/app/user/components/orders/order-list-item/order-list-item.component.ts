import { Component, OnInit, Input } from '@angular/core';

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

  getProductImageUrl(url) {
    return url;
  }
}
