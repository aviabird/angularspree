import { Product } from './../../../../core/models/product';
import { isPlatformBrowser } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from './../../../../core/services/product.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, PLATFORM_ID, Inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../interfaces';
import { getAuthStatus } from '../../../../auth/reducers/selectors';
import { User } from '../../../../core/models/user';
import { RatingOption } from '../../../../core/models/rating_option';

@Component({
  selector: 'app-write-product-review',
  templateUrl: './write-product-review.component.html',
  styleUrls: ['./write-product-review.component.scss']
})
export class WriteProductReviewComponent implements OnInit {
  reviewForm: FormGroup;
  queryParams: Object;
  showThanks = false;
  product: Product;
  submitReview = true;
  isAuthenticated: boolean;

  constructor(private fb: FormBuilder,
    private productService: ProductService,
    private activeRoute: ActivatedRoute,
    private toastrService: ToastrService,
    private router: Router,
    private store: Store<AppState>,
    @Inject(PLATFORM_ID) private platformId: any) {

    this.store.select(getAuthStatus).subscribe(auth => {
      this.isAuthenticated = auth;
    });

  }

  ngOnInit() {
    this.initForm();
    this.product = this.activeRoute.snapshot.data['product'];
  }

  initForm() {
    const rating = '';
    const title = '';
    const review = '';
    if (this.isAuthenticated) {
      this.reviewForm = this.fb.group({
        rating: [rating, Validators.required],
        title: [title, Validators.required],
        review: [review, Validators.required]
      }
      );
    } else {
      this.router.navigate(['auth', 'login'])
    }
  }

  getProductImageUrl(url) {
    return url;
  }

  getUserFromLocalStorage() {
    if (isPlatformBrowser(this.platformId)) {
      if (localStorage.getItem('user')) {
        return JSON.parse(localStorage.getItem('user'))
      }
    }
  }

  onSubmit() {
    if (this.reviewForm.valid) {
      const values = this.reviewForm.value;
      const params = this.buildReviewJson(values)

      this.productService.submitReview(params)
        .subscribe(_ => {
          this.showThanks = true;
          this.submitReview = false;
        });
    } else {
      this.toastrService.error('All fields are rquired', 'Invalid!')
    }
  }

  goToProduct(prodId) {
    this.router.navigate([prodId])
  }

  getRatingId(userRatingValue: number) {
    const ratingOptions = isPlatformBrowser(this.platformId) ? JSON.parse(localStorage.getItem('product_rating_options')) : null
    const ratingOptionArray: Array<RatingOption> = ratingOptions.rating_options;
    let temp: string;
    ratingOptionArray.forEach(element => {
      if (element.value === userRatingValue) {
        temp = element.id;
      }
    })
    return temp;
  }

  buildReviewJson(formData) {
    const user: User = this.getUserFromLocalStorage();
    const params = {
      'data': {
        'type': 'reviews',
        'attributes': {
          'title': formData.title,
          'description': formData.review,
          'name': user.first_name,
          'locale': 'en'
        },
        'relationships': {
          'user': {
            'data': {
              'type': 'users',
              'id': user.id
            }
          },
          'product': {
            'data': { 'type': 'products', 'id': this.product.id }
          },
          'rating_option': {
            'data': { 'type': 'rating_options', 'id': this.getRatingId(formData.rating) }
          }
        }
      }
    }
    return params;
  }
}
