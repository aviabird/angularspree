import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailPageComponent } from './product-detail-page.component';

describe('ProductDetailComponent', () => {
  let component: ProductDetailPageComponent;
  let fixture: ComponentFixture<ProductDetailPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductDetailPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
