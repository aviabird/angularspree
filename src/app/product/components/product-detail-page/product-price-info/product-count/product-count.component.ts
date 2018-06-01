import { Component, OnInit, Input, ViewEncapsulation, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-count',
  templateUrl: './product-count.component.html',
  styleUrls: ['./product-count.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProductCountComponent implements OnInit {
  @Input() product;
  @Output() onAddToCart = new EventEmitter<Object>();
  @Output() onMarkAsFavorites = new EventEmitter<Object>();

  count = 1;

  constructor() { }

  ngOnInit() {
  }

  increseCount() {
    this.count += 1;
  }

  /**
   * 
   * 
   * @memberof ProductcountComponent
   */
  decreaseCount() {
    this.count -= 1;
    if (this.count <= 1) {
      this.count = 1;
    }
  }

  addToCart(count: number) {
    this.onAddToCart.emit(count);
  }

  markAsFavorites() {
    this.onMarkAsFavorites.emit();
  }
}
