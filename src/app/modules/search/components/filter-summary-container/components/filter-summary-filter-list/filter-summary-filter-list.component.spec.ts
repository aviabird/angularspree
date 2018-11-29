import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterSummaryFilterListComponent } from './filter-summary-filter-list.component';

describe('FilterSummaryFilterListComponent', () => {
  let component: FilterSummaryFilterListComponent;
  let fixture: ComponentFixture<FilterSummaryFilterListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterSummaryFilterListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterSummaryFilterListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
