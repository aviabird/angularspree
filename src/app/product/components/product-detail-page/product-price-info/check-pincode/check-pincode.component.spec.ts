import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckPincodeComponent } from './check-pincode.component';

describe('CheckPincodeComponent', () => {
  let component: CheckPincodeComponent;
  let fixture: ComponentFixture<CheckPincodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckPincodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckPincodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
