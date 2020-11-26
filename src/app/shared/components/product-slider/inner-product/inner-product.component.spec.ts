import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { InnerIproductComponent } from './inner-product.component';

describe('InnerIproductComponent', () => {
  let component: InnerIproductComponent;
  let fixture: ComponentFixture<InnerIproductComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [InnerIproductComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InnerIproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
