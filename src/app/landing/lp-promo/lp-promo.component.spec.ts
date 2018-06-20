import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LpPromoComponent } from './lp-promo.component';

describe('LpPromoComponent', () => {
  let component: LpPromoComponent;
  let fixture: ComponentFixture<LpPromoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LpPromoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LpPromoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
