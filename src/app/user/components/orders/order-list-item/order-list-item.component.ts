import { Component, OnInit, Input } from '@angular/core';
import { Order } from '../../../../core/models/order';
import { UserService } from '../../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-list-item',
  templateUrl: './order-list-item.component.html',
  styleUrls: ['./order-list-item.component.scss']
})
export class OrderListItemComponent implements OnInit {
  @Input() order: Order;

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  getProductImageUrl(url) {
    return url;
  }
}
