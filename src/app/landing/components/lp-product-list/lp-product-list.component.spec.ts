import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LpProductListComponent } from './lp-product-list.component';

describe('LpProductListComponent', () => {
  let component: LpProductListComponent;
  let fixture: ComponentFixture<LpProductListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [LpProductListComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LpProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
