import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageContainerComponent } from './image-container.component';

describe('ImageContainerComponent', () => {
  let component: ImageContainerComponent;
  let fixture: ComponentFixture<ImageContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
