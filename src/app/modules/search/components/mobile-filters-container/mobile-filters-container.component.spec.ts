import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileFiltersContainerComponent } from './mobile-filters-container.component';

describe('MobileFiltersContainerComponent', () => {
  let component: MobileFiltersContainerComponent;
  let fixture: ComponentFixture<MobileFiltersContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileFiltersContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileFiltersContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
