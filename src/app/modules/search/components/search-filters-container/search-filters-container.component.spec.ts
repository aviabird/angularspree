import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SearchFiltersContainerComponent } from './search-filters-container.component';

describe('SearchFiltersContainerComponent', () => {
  let component: SearchFiltersContainerComponent;
  let fixture: ComponentFixture<SearchFiltersContainerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [SearchFiltersContainerComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchFiltersContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
