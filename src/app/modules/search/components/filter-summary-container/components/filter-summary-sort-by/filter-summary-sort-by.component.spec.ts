import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FilterSummarySortByComponent } from './filter-summary-sort-by.component';

describe('FilterSummarySortByComponent', () => {
  let component: FilterSummarySortByComponent;
  let fixture: ComponentFixture<FilterSummarySortByComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [FilterSummarySortByComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterSummarySortByComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
