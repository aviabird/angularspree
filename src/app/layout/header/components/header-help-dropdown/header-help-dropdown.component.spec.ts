import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { HeaderHelpDropdownComponent } from './header-help-dropdown.component';

describe('HeaderHelpDropdownComponent', () => {
  let component: HeaderHelpDropdownComponent;
  let fixture: ComponentFixture<HeaderHelpDropdownComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderHelpDropdownComponent]
    }).compileComponents();
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
