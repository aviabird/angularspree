import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchTitleContainerComponent } from './search-title-container.component';

describe('SearchTitleContainerComponent', () => {
  let component: SearchTitleContainerComponent;
  let fixture: ComponentFixture<SearchTitleContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchTitleContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchTitleContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
