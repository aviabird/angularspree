import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MultiselectFilterComponent } from './multiselect-filter.component';

describe('MultiselectFilterComponent', () => {
  let component: MultiselectFilterComponent;
  let fixture: ComponentFixture<MultiselectFilterComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [MultiselectFilterComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiselectFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
