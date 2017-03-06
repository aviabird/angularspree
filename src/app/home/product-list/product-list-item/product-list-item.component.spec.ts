import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductListItemComponent } from './product-list-item.component';

describe('ProductListItemComponent', () => {
  let component: ProductListItemComponent;
  let fixture: ComponentFixture<ProductListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
