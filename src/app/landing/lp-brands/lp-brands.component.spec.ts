import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LpBrandsComponent } from './lp-brands.component';

describe('LpBrandsComponent', () => {
  let component: LpBrandsComponent;
  let fixture: ComponentFixture<LpBrandsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LpBrandsComponent ]
    })
    .compileComponents();
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
