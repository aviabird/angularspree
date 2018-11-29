import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterSummaryContainerComponent } from './filter-summary-container.component';

describe('FilterSummaryContainerComponent', () => {
  let component: FilterSummaryContainerComponent;
  let fixture: ComponentFixture<FilterSummaryContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterSummaryContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterSummaryContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
