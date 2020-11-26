import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FilterSummaryFilterComponent } from './filter-summary-filter.component';

describe('FilterSummaryFilterComponent', () => {
  let component: FilterSummaryFilterComponent;
  let fixture: ComponentFixture<FilterSummaryFilterComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [FilterSummaryFilterComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterSummaryFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
