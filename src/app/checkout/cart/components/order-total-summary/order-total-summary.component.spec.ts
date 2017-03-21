import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderTotalSummaryComponent } from './order-total-summary.component';

describe('OrderTotalSummaryComponent', () => {
  let component: OrderTotalSummaryComponent;
  let fixture: ComponentFixture<OrderTotalSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderTotalSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderTotalSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
