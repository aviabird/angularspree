import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ProductReviewComponent } from './product-review.component';

describe('ProductReviewComponent', () => {
  let component: ProductReviewComponent;
  let fixture: ComponentFixture<ProductReviewComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ProductReviewComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
