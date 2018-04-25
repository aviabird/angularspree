import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesDetailsComponent } from './categories-details.component';

describe('CategoriesDetailsComponent', () => {
  let component: CategoriesDetailsComponent;
  let fixture: ComponentFixture<CategoriesDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoriesDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
