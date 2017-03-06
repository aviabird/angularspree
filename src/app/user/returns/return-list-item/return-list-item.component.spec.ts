import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnListItemComponent } from './return-list-item.component';

describe('ReturnListItemComponent', () => {
  let component: ReturnListItemComponent;
  let fixture: ComponentFixture<ReturnListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReturnListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReturnListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
