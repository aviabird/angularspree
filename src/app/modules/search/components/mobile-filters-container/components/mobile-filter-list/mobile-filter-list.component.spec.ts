import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileFilterListComponent } from './mobile-filter-list.component';

describe('MobileFilterListComponent', () => {
  let component: MobileFilterListComponent;
  let fixture: ComponentFixture<MobileFilterListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MobileFilterListComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileFilterListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
