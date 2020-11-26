import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ProfilePasswordComponent } from './profile-password.component';

describe('ProfilePasswordComponent', () => {
  let component: ProfilePasswordComponent;
  let fixture: ComponentFixture<ProfilePasswordComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ProfilePasswordComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilePasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
