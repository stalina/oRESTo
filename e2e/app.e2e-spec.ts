import { ORESToPage } from './app.po';

describe('o-resto App', () => {
  let page: ORESToPage;

  beforeEach(() => {
    page = new ORESToPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
