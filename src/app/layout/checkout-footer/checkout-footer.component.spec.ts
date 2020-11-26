import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CheckoutFooterComponent } from './checkout-footer.component';

describe('CheckoutFooterComponent', () => {
  let component: CheckoutFooterComponent;
  let fixture: ComponentFixture<CheckoutFooterComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [CheckoutFooterComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckoutFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
