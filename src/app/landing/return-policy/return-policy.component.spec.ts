import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnPolicyComponent } from './return-policy.component';

describe('ReturnPolicyComponent', () => {
  let component: ReturnPolicyComponent;
  let fixture: ComponentFixture<ReturnPolicyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReturnPolicyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReturnPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
