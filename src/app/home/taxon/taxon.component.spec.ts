import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxonComponent } from './taxon.component';

describe('TaxonComponent', () => {
  let component: TaxonComponent;
  let fixture: ComponentFixture<TaxonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaxonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaxonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
