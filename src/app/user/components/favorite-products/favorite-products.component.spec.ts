import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteProductsComponent } from './favorite-products.component';

describe('FavoriteProductsComponent', () => {
  let component: FavoriteProductsComponent;
  let fixture: ComponentFixture<FavoriteProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavoriteProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoriteProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
