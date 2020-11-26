import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LineItemComponent } from './line-item.component';

describe('LineItemComponent', () => {
  let component: LineItemComponent;
  let fixture: ComponentFixture<LineItemComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [LineItemComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LineItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
