import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-product-count',
  templateUrl: './product-count.component.html',
  styleUrls: ['./product-count.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProductCountComponent implements OnInit {
  @Input() product;
  count: number = 1;
  flag: any;

  constructor() { }

  ngOnInit() {

  }

  increseCount() {
    console.log(this.count)

    this.count += 1;

  }

  /**
   * 
   * 
   * @memberof ProductcountComponent
   */
  decreaseCount() {

    if (this.count = 1) {
      this.flag = true;

    }
    if (this.count > 1) {
      this.count -= 1;
    }


  }

}
