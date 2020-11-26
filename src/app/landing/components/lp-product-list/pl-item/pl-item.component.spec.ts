import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PlItemComponent } from './pl-item.component';

describe('PlItemComponent', () => {
  let component: PlItemComponent;
  let fixture: ComponentFixture<PlItemComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [PlItemComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
