import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LpTrItemComponent } from './lp-tr-item.component';

describe('LpTrItemComponent', () => {
  let component: LpTrItemComponent;
  let fixture: ComponentFixture<LpTrItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LpTrItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LpTrItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
