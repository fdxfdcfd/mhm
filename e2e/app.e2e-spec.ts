import { MuahangmyPage } from './app.po';

describe('muahangmy App', function() {
  let page: MuahangmyPage;

  beforeEach(() => {
    page = new MuahangmyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
