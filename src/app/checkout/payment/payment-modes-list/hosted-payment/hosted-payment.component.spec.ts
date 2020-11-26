import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { HostedPaymentComponent } from './hosted-payment.component';

describe('CreditCardComponent', () => {
  let component: HostedPaymentComponent;
  let fixture: ComponentFixture<HostedPaymentComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [HostedPaymentComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HostedPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
