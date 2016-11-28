import { NcmAdminWebPage } from './app.po';

describe('ncm-admin-web App', function() {
  let page: NcmAdminWebPage;

  beforeEach(() => {
    page = new NcmAdminWebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
