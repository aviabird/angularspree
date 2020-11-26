import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SearchResultsContainerComponent } from './search-results-container.component';

describe('SearchResultsContainerComponent', () => {
  let component: SearchResultsContainerComponent;
  let fixture: ComponentFixture<SearchResultsContainerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [SearchResultsContainerComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchResultsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
