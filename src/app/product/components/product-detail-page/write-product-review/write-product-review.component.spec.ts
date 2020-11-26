import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { WriteProductReviewComponent } from './write-product-review.component';

describe('WriteProductReviewComponent', () => {
  let component: WriteProductReviewComponent;
  let fixture: ComponentFixture<WriteProductReviewComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [WriteProductReviewComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WriteProductReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
