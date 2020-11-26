import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BrandMenuDropdownComponent } from './brand-menu-dropdown.component';

describe('BrandMenuDropdownComponent', () => {
  let component: BrandMenuDropdownComponent;
  let fixture: ComponentFixture<BrandMenuDropdownComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [BrandMenuDropdownComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrandMenuDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
