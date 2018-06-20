import { LandingModule } from './landing.module';

describe('LandingModule', () => {
  let landingModule: LandingModule;

  beforeEach(() => {
    landingModule = new LandingModule();
  });

  it('should create an instance', () => {
    expect(landingModule).toBeTruthy();
  });
});
