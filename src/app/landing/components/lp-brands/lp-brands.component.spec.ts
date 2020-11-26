import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LpBrandsComponent } from './lp-brands.component';

describe('LpBrandsComponent', () => {
  let component: LpBrandsComponent;
  let fixture: ComponentFixture<LpBrandsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [LpBrandsComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LpBrandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
