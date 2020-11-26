import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FooterQuickLinksComponent } from './footer-quick-links.component';

describe('FooterQuickLinksComponent', () => {
  let component: FooterQuickLinksComponent;
  let fixture: ComponentFixture<FooterQuickLinksComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [FooterQuickLinksComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterQuickLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
