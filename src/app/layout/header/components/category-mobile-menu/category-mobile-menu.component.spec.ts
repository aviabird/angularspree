import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryMobileMenuComponent } from './category-mobile-menu.component';

describe('CategoryMobileMenuComponent', () => {
  let component: CategoryMobileMenuComponent;
  let fixture: ComponentFixture<CategoryMobileMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryMobileMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryMobileMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
