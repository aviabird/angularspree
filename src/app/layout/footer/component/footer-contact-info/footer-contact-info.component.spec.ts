import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FooterContactInfoComponent } from './footer-contact-info.component';

describe('FooterContactInfoComponent', () => {
  let component: FooterContactInfoComponent;
  let fixture: ComponentFixture<FooterContactInfoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [FooterContactInfoComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterContactInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
