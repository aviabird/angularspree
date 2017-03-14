import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileDropdownComponent } from './profile-dropdown.component';

describe('ProfileDropdownComponent', () => {
  let component: ProfileDropdownComponent;
  let fixture: ComponentFixture<ProfileDropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileDropdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
