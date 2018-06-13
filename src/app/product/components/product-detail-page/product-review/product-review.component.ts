
import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Product } from './../../../../core/models/product';
import { Router } from '@angular/router';
@Component({
  selector: 'app-product-review',
  templateUrl: './product-review.component.html',
  styleUrls: ['./product-review.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductReviewComponent implements OnInit {
  @Input() reviewList;
  @Input() product: Product;
  ratingOneStar: any = 0;
  ratingTwoStar: any = 0;
  ratingThreeStar: any = 0;
  ratingFourStar: any = 0;
  ratingFivwStar: any = 0;
  ratingTodal: any = 0;
  percent: number[] = new Array(5);
  review: any
  productID: any
  dynamic = 70;

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
    this.productID = this.product.id;
  }

  showReviewForm() {
    this.router.navigate([this.product.slug, 'write_review'], { queryParams: { 'prodId': this.productID } });
  }


}
