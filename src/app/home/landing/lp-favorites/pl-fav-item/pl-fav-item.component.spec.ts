import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlFavItemComponent } from './pl-fav-item.component';

describe('PlFavItemComponent', () => {
  let component: PlFavItemComponent;
  let fixture: ComponentFixture<PlFavItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlFavItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlFavItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
