import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxonsComponent } from './taxons.component';

describe('TaxonsComponent', () => {
  let component: TaxonsComponent;
  let fixture: ComponentFixture<TaxonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaxonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaxonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
