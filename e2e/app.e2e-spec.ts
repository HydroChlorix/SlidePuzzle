import { SlidePuzzlePage } from './app.po';

describe('slide-puzzle App', () => {
  let page: SlidePuzzlePage;

  beforeEach(() => {
    page = new SlidePuzzlePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
