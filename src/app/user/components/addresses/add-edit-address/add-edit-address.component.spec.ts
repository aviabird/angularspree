import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AddEditAddressComponent } from './add-edit-address.component';

describe('AddEditAddressComponent', () => {
  let component: AddEditAddressComponent;
  let fixture: ComponentFixture<AddEditAddressComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [AddEditAddressComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
