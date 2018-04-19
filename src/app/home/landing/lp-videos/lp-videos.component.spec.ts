import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LpVideosComponent } from './lp-videos.component';

describe('LpVideosComponent', () => {
  let component: LpVideosComponent;
  let fixture: ComponentFixture<LpVideosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LpVideosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LpVideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
