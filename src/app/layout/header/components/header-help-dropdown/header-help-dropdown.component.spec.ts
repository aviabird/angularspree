import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderHelpDropdownComponent } from './header-help-dropdown.component';

describe('HeaderHelpDropdownComponent', () => {
  let component: HeaderHelpDropdownComponent;
  let fixture: ComponentFixture<HeaderHelpDropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderHelpDropdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderHelpDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
