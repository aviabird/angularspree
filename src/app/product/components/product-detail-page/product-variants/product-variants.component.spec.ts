import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ProductVariantsComponent } from './product-variants.component';

describe('ProductVariantsComponent', () => {
  let component: ProductVariantsComponent;
  let fixture: ComponentFixture<ProductVariantsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ProductVariantsComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductVariantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
