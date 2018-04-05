import { AppPage } from './app.po';
import { browser, by, element } from 'protractor';

describe('my-app App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toContain('Welcome');
  });
});
describe('Given routes should flip through navigation', () => {
  var view1 = element(by.css('#Home'));
  var view2 = element(by.css('#List'));

  beforeEach(() => {
    browser.get('');
    expect(view1.isPresent()).toBeTruthy();
    var view2Link = element(by.linkText('List'));
    view2Link.click();
  });

  it('should flipped Home again and should be visible', () => {
    var viewLink = element(by.linkText('Home'));
    viewLink.click();
    expect(view1.isPresent()).toBeTruthy();
    expect(view2.isPresent()).toBeFalsy();

    
  });
});


