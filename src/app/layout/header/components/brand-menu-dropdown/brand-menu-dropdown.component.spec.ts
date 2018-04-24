import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandMenuDropdownComponent } from './brand-menu-dropdown.component';

describe('BrandMenuDropdownComponent', () => {
  let component: BrandMenuDropdownComponent;
  let fixture: ComponentFixture<BrandMenuDropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrandMenuDropdownComponent ]
    })
    .compileComponents();
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
