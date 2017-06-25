import { SocialNetworkAngularPage } from './app.po';

describe('social-network-angular App', () => {
  let page: SocialNetworkAngularPage;

  beforeEach(() => {
    page = new SocialNetworkAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
