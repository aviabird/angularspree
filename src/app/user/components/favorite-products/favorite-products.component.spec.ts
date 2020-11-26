import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FavoriteProductsComponent } from './favorite-products.component';

describe('FavoriteProductsComponent', () => {
  let component: FavoriteProductsComponent;
  let fixture: ComponentFixture<FavoriteProductsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [FavoriteProductsComponent]
    }).compileComponents();
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
