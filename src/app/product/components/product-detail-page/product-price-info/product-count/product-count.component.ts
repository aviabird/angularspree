import { Component, OnInit, Input, ViewEncapsulation, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Product } from '../../../../../core/models/product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-count',
  templateUrl: './product-count.component.html',
  styleUrls: ['./product-count.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class ProductCountComponent implements OnInit {
  @Input() product: Product;
  @Input() isOrderable;
  @Output() onAddToCart = new EventEmitter<Object>();
  @Output() onMarkAsFavorites = new EventEmitter<Object>();

  count: any = 1;

  constructor(private router: Router) {

  }

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

  buyNow(count: number) {
    this.onAddToCart.emit(count);
    this.router.navigate(['checkout', 'cart']);
  }

  markAsFavorites() {
    this.onMarkAsFavorites.emit();
  }
}
