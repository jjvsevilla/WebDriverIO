import { expect } from 'chai';

describe('webdriver.io api page', () => {
  it('should be able to filter for commands', () => {
      browser.url('/');
      console.log('browser');
      console.log(browser);
      var title = browser.getTitle();
      console.log(`title ${title}`);
      expect(title).to.be.equal('WebdriverIO - Selenium 2.0 javascript bindings for nodejs');
  });
});
