import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LpFavoritesComponent } from './lp-favorites.component';

describe('LpFavoritesComponent', () => {
  let component: LpFavoritesComponent;
  let fixture: ComponentFixture<LpFavoritesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LpFavoritesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LpFavoritesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
