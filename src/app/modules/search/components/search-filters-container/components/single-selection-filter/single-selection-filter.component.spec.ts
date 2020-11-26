import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SingleSelectionFilterComponent } from './single-selection-filter.component';

describe('SingleSelectionFilterComponent', () => {
  let component: SingleSelectionFilterComponent;
  let fixture: ComponentFixture<SingleSelectionFilterComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [SingleSelectionFilterComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleSelectionFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
