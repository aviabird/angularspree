import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FavoriteProductListItemComponent } from './favorite-product-list-item.component';

describe('FavoriteProductListItemComponent', () => {
  let component: FavoriteProductListItemComponent;
  let fixture: ComponentFixture<FavoriteProductListItemComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [FavoriteProductListItemComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoriteProductListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
