import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InnerIproduct } from './inner-product.component';

describe('InnerIproduct', () => {
  let component: InnerIproduct;
  let fixture: ComponentFixture<InnerIproduct>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InnerIproduct ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InnerIproduct);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
