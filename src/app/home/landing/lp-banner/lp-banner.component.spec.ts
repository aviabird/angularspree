import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LpBannerComponent } from './lp-banner.component';

describe('LpBannerComponent', () => {
  let component: LpBannerComponent;
  let fixture: ComponentFixture<LpBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LpBannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LpBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
