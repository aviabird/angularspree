import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileFilterListFilterComponent } from './mobile-filter-list-filter.component';

describe('MobileFilterListFilterComponent', () => {
  let component: MobileFilterListFilterComponent;
  let fixture: ComponentFixture<MobileFilterListFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileFilterListFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileFilterListFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
