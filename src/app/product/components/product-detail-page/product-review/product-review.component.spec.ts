import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductReviewComponent } from './product-review.component';

describe('ProductReviewComponent', () => {
  let component: ProductReviewComponent;
  let fixture: ComponentFixture<ProductReviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductReviewComponent ]
    })
    .compileComponents();
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
