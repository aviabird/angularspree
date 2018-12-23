import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchTitleCountComponent } from './search-title-count.component';

describe('SearchTitleCountComponent', () => {
  let component: SearchTitleCountComponent;
  let fixture: ComponentFixture<SearchTitleCountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchTitleCountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchTitleCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
