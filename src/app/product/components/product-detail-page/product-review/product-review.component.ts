
import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Product } from './../../../../core/models/product';
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

  constructor() {

  }

  ngOnInit() {
  }

  getStarprogress() {

    for (const key in this.reviewList) {
      if (this.reviewList.hasOwnProperty(key)) {
        const element = this.reviewList[key];
        switch (element.rating) {
          case element.rating = 1: {
            this.ratingOneStar += 1;
            break;
          }
          case element.rating = 2: {
            this.ratingTwoStar += 1;
            break;
          }
          case element.rating = 3: {
            this.ratingThreeStar += 1;
            break;
          }
          case element.rating = 4: {
            this.ratingFourStar += 1;
            break;
          }
          case element.rating = 5: {
            this.ratingFivwStar += 1;
            break;
          }
        }
        this.ratingTodal += element.rating;
      }
    }
    console.log(this.ratingOneStar);
    console.log(this.ratingTwoStar);
    console.log(this.ratingThreeStar);
    console.log(this.ratingFourStar);
    console.log(this.ratingFivwStar);
    console.log(this.ratingTodal);
  }


}
