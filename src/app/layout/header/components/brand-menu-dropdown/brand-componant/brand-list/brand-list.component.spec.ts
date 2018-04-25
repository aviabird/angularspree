import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandListComponent } from './brand-list.component';

describe('BrandListComponent', () => {
  let component: BrandListComponent;
  let fixture: ComponentFixture<BrandListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrandListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrandListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
