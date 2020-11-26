import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LineItemListComponent } from './line-item-list.component';

describe('LineItemListComponent', () => {
  let component: LineItemListComponent;
  let fixture: ComponentFixture<LineItemListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [LineItemListComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LineItemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
