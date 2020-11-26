import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ProductPriceInfoComponent } from '../product-price-info.component';

describe('ProductPriceInfoComponent', () => {
  let component: ProductPriceInfoComponent;
  let fixture: ComponentFixture<ProductPriceInfoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ProductPriceInfoComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductPriceInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
