import { Product } from './../../../../core/models/product';
import { isPlatformBrowser } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from './../../../../core/services/product.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, PLATFORM_ID, Inject, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../interfaces';
import { getAuthStatus } from '../../../../auth/reducers/selectors';
import { User } from '../../../../core/models/user';
import { RatingOption } from '../../../../core/models/rating_option';
import { getProductRatingOptions, getIsReviewSubmitted } from '../../../reducers/selectors';
import { Subscription, Observable } from 'rxjs';
import { ProductActions } from '../../../actions/product-actions';

@Component({
  selector: 'app-write-product-review',
  templateUrl: './write-product-review.component.html',
  styleUrls: ['./write-product-review.component.scss']
})
export class WriteProductReviewComponent implements OnInit, OnDestroy {
  reviewForm: FormGroup;
  queryParams: Object;
  showThanks = false;
  product: Product;
  submitReview = true;
  isAuthenticated: boolean;
  noImageUrl = 'assets/default/image-placeholder.svg'
  ratingOptions: Array<RatingOption>;
  ratingId: string;
  userInfo: User;
  subscriptionList$: Array<Subscription> = [];
  isReviewSubmitted: boolean;

  constructor(private fb: FormBuilder,
    private productService: ProductService,
    private activeRoute: ActivatedRoute,
    private toastrService: ToastrService,
    private router: Router,
    private store: Store<AppState>,
    private productAction: ProductActions,
    @Inject(PLATFORM_ID) private platformId: any) { }

  ngOnInit() {
    this.subscriptionList$.push(
      this.store.select(getAuthStatus).subscribe(auth => { this.isAuthenticated = auth })
    );
    this.product = this.activeRoute.snapshot.data['product'];    
    this.initForm();
    this.userInfo = this.getUserFromLocalStorage();
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
    } else { this.router.navigate([this.product.slug]) }
  }

  getProductImageUrl() {
    return this.product.images[0] ? this.product.images[0].product_url : this.noImageUrl;
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
      const formValues = this.reviewForm.value;
      const params = this.buildReviewJson(formValues, this.userInfo, this.product.id, this.getRatingId(formValues.rating))
      this.store.dispatch(this.productAction.writeProductReview(params));
      this.subscriptionList$.push(
        this.store.select(getIsReviewSubmitted).subscribe(status => this.isReviewSubmitted = status)
      );
    } else {
      this.toastrService.error('All fields are rquired', 'Invalid!')
    }
  }

  goToProduct(prodSlug) {
    this.router.navigate([prodSlug])
  }

  getRatingId(userRatingValue: number) {
    this.store.select(getProductRatingOptions)
      .subscribe(ratingOptionsList => { this.ratingOptions = ratingOptionsList })
    this.ratingOptions.forEach(element => {
      if (element.value === userRatingValue) { this.ratingId = element.id }
    })
    return this.ratingId;
  }

  buildReviewJson(formData, user: User, productId: number, ratingId: string) {
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
            'data': { 'type': 'products', 'id': productId }
          },
          'rating_option': {
            'data': { 'type': 'rating_options', 'id': ratingId }
          }
        }
      }
    }
    return params;
  }

  ngOnDestroy() {
    this.subscriptionList$.forEach(sub$ => sub$.unsubscribe());
  }
}
