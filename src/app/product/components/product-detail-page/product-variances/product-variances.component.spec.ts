import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductVariancesComponent } from './product-variances.component';

describe('ProductVariancesComponent', () => {
  let component: ProductVariancesComponent;
  let fixture: ComponentFixture<ProductVariancesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductVariancesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductVariancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
