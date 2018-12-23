import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleSelectionFilterComponent } from './single-selection-filter.component';

describe('SingleSelectionFilterComponent', () => {
  let component: SingleSelectionFilterComponent;
  let fixture: ComponentFixture<SingleSelectionFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleSelectionFilterComponent ]
    })
    .compileComponents();
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
