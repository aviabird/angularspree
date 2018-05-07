import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LpTopRatedComponent } from './lp-top-rated.component';

describe('LpTopRatedComponent', () => {
  let component: LpTopRatedComponent;
  let fixture: ComponentFixture<LpTopRatedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LpTopRatedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LpTopRatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
