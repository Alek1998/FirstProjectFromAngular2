import { FirstProjectFromAngular2Page } from './app.po';

describe('first-project-from-angular2 App', () => {
  let page: FirstProjectFromAngular2Page;

  beforeEach(() => {
    page = new FirstProjectFromAngular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
