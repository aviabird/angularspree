import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentModeComponent } from './payment-mode.component';

describe('PaymentModeComponent', () => {
  let component: PaymentModeComponent;
  let fixture: ComponentFixture<PaymentModeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentModeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentModeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
