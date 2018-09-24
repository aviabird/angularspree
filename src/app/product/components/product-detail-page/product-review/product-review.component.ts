
import { Component, OnInit, Input, ChangeDetectionStrategy, OnChanges } from '@angular/core';
import { Product } from './../../../../core/models/product';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../interfaces';
import { getAuthStatus } from '../../../../auth/reducers/selectors';
import { ToastrService } from 'ngx-toastr';
import { environment } from '../../../../../environments/environment';
import { RatingOption } from '../../../../core/models/rating_option';
@Component({
  selector: 'app-product-review',
  templateUrl: './product-review.component.html',
  styleUrls: ['./product-review.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class ProductReviewComponent implements OnInit {
  @Input() product: Product;
  @Input() isMobile;
  isAuthenticated: boolean;
  reviewsDisplayLimit = environment.config.reviewsDisplayLimit;
  ratingOptions: Array<RatingOption>;

  constructor(
    private router: Router,
    private store: Store<AppState>,
    private toastrService: ToastrService
  ) {
    this.store.select(getAuthStatus).subscribe(auth => {
      this.isAuthenticated = auth;
    })
  }

  ngOnInit() {
    this.ratingOptions = this.getRatingOptions();
  }

  showReviewForm() {
    if (this.isAuthenticated) {
      this.router.navigate([this.product.slug, 'write_review'], { queryParams: { 'prodId': this.product.id } });
    } else {
      this.toastrService.info('Please Login to write review.', 'Login')
    }
  }

  get reviewPercent() {
    return Math.ceil(+this.product.rating_summary.average_rating / this.reviewsDisplayLimit * 100);
  }

  getRatingOptions() {
    const temp = JSON.parse(localStorage.getItem('product_rating_options'));
    return temp.rating_options;
  }
}
