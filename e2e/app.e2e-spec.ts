import { InfoSitePage } from './app.po';

describe('info-site App', function() {
  let page: InfoSitePage;

  beforeEach(() => {
    page = new InfoSitePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
