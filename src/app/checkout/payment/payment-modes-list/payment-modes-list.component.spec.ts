import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentModesListComponent } from './payment-modes-list.component';

describe('PaymentModesListComponent', () => {
  let component: PaymentModesListComponent;
  let fixture: ComponentFixture<PaymentModesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentModesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentModesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
