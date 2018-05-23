import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderSearchComponent } from './header-search.component';

describe('HeaderSearchComponent', () => {
  let component: HeaderSearchComponent;
  let fixture: ComponentFixture<HeaderSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderSearchComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
