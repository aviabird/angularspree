import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from './../../../../core/services/product.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-write-product-review',
  templateUrl: './write-product-review.component.html',
  styleUrls: ['./write-product-review.component.scss']
})
export class WriteProductReviewComponent implements OnInit {

  reviewForm: FormGroup;
  queryParams: any
  showThanks = false
  constructor(private fb: FormBuilder,
    private productService: ProductService,
    private activeRoute: ActivatedRoute,
    private toastrService: ToastrService,
    private router: Router) {
    this.activeRoute.queryParams
      .subscribe(params => {
        this.queryParams = params
      });
  }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    const rating = '';
    const name = '';
    const title = '';
    const review = '';

    this.reviewForm = this.fb.group({
      rating: [rating, Validators.required],
      name: [JSON.parse(localStorage.getItem('user')).email],
      title: [title, Validators.required],
      review: [review, Validators.required]
    }
    );
  }

  parse(formData) {
    return {
      review: {
        rating: formData.rating.toString(),
        name: formData.name,
        title: formData.title,
        review: formData.review
      }
    }
  }

  onSubmit() {
    if (this.reviewForm.valid) {
      const values = this.reviewForm.value;
      const params = this.parse(values)
      this.productService.submitReview(this.queryParams.prodId, params)
        .subscribe((res) => {
          this.showThanks = true
        })
    } else {
      this.toastrService.error('Enter data in all fields', 'Error!')
    }
  }
  goToProduct() {
    this.router.navigate([this.queryParams.prodId])
  }
}
