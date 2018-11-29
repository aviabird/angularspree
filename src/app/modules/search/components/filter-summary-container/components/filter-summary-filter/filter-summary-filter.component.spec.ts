import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterSummaryFilterComponent } from './filter-summary-filter.component';

describe('FilterSummaryFilterComponent', () => {
  let component: FilterSummaryFilterComponent;
  let fixture: ComponentFixture<FilterSummaryFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterSummaryFilterComponent ]
    })
    .compileComponents();
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
