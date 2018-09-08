import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentHeaderComponent } from './content-header.component';

describe('ContentHeaderComponent', () => {
  let component: ContentHeaderComponent;
  let fixture: ComponentFixture<ContentHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
