import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesMenuDropdownComponent } from './categories-menu-dropdown.component';

describe('categoriesMenuDropdownComponent', () => {
  let component: CategoriesMenuDropdownComponent;
  let fixture: ComponentFixture<CategoriesMenuDropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoriesMenuDropdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriesMenuDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
