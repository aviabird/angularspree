import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CashOnDeliveryComponent } from './cash-on-delivery.component';

describe('CashOnDeliveryComponent', () => {
  let component: CashOnDeliveryComponent;
  let fixture: ComponentFixture<CashOnDeliveryComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [CashOnDeliveryComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CashOnDeliveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
