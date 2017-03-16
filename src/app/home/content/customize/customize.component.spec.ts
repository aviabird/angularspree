import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomizeComponent } from './customize.component';

describe('CustomizeComponent', () => {
  let component: CustomizeComponent;
  let fixture: ComponentFixture<CustomizeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomizeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
