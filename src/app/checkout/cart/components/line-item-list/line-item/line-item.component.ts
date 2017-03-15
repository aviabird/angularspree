import { environment } from './../../../../../../environments/environment';
import { LineItem } from './../../../../../core/models/line_item';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-line-item',
  templateUrl: './line-item.component.html',
  styleUrls: ['./line-item.component.scss']
})
export class LineItemComponent implements OnInit {

  image: string;
  name: string;
  quantity: number;
  amount: number;

  @Input() lineItem: LineItem;

  constructor() { }

  ngOnInit() {
    this.image = environment.API_ENDPOINT + this.lineItem.variant.images[0].product_url;
    this.name = this.lineItem.variant.name;
    this.quantity = this.lineItem.quantity;
    this.amount = this.lineItem.display_amount;
  }

}
