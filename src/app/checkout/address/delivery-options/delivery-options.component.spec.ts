import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DeliveryOptionsComponent } from './delivery-options.component';

describe('DeliveryOptionsComponent', () => {
  let component: DeliveryOptionsComponent;
  let fixture: ComponentFixture<DeliveryOptionsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [DeliveryOptionsComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliveryOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
