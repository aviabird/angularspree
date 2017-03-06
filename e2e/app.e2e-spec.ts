import { AngularspreePage } from './app.po';

describe('angularspree App', () => {
  let page: AngularspreePage;

  beforeEach(() => {
    page = new AngularspreePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
