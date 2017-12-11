import { Shop2Page } from './app.po';

describe('shop2 App', function() {
  let page: Shop2Page;

  beforeEach(() => {
    page = new Shop2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
