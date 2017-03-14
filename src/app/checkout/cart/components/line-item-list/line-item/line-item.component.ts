import { LineItem } from './../../../../../core/models/line_item';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-line-item',
  templateUrl: './line-item.component.html',
  styleUrls: ['./line-item.component.scss']
})
export class LineItemComponent implements OnInit {

  @Input() lineItem: LineItem;

  constructor() { }

  ngOnInit() {
    console.log('line item', this.lineItem);
  }

}
