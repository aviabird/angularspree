import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterMobileMenuComponent } from './filter-mobile-menu.component';

describe('FilterMobileMenuComponent', () => {
  let component: FilterMobileMenuComponent;
  let fixture: ComponentFixture<FilterMobileMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterMobileMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterMobileMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
