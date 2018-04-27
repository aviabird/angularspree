import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterQuickLinksComponent } from './footer-quick-links.component';

describe('FooterQuickLinksComponent', () => {
  let component: FooterQuickLinksComponent;
  let fixture: ComponentFixture<FooterQuickLinksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterQuickLinksComponent ]
    })
    .compileComponents();
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
