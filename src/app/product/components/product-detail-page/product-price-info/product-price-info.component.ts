import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-product-price-info',
  templateUrl: './product-price-info.component.html',
  styleUrls: ['./product-price-info.component.scss']
})
export class ProductPriceInfoComponent implements OnInit {
  @Input() product;
  @Output() onAddToCart = new EventEmitter<Object>();
  @Output() onMarkAsFavorites = new EventEmitter<Object>();

  constructor() { }

  ngOnInit() {
  }

  addToCart(event) {
    this.onAddToCart.emit(event)
  }

  markAsFavorites() {
    this.onMarkAsFavorites.emit()
  }
}
