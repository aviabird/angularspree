import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandLogoComponent } from './brand-logo.component';

describe('BrandLogoComponent', () => {
  let component: BrandLogoComponent;
  let fixture: ComponentFixture<BrandLogoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BrandLogoComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrandLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
