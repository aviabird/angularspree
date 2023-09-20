import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileSortFilterListComponent } from './mobile-sort-filter-list.component';

describe('MobileSortFilterListComponent', () => {
  let component: MobileSortFilterListComponent;
  let fixture: ComponentFixture<MobileSortFilterListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileSortFilterListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileSortFilterListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
