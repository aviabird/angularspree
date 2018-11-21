import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RazorPaymentComponent } from './razor-payment.component';

describe('CashOnDeliveryComponent', () => {
  let component: RazorPaymentComponent;
  let fixture: ComponentFixture<RazorPaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RazorPaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RazorPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
