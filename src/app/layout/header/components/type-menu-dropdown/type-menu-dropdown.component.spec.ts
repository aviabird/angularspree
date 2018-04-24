import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeMenuDropdownComponent } from './type-menu-dropdown.component';

describe('TypeMenuDropdownComponent', () => {
  let component: TypeMenuDropdownComponent;
  let fixture: ComponentFixture<TypeMenuDropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeMenuDropdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeMenuDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
