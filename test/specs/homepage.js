
/*
var expect = require('chai').expect;

describe('webdriver.io api page', function() {
    it('should be able to filter for commands', function () {
        browser.url('/');
        var title = browser.getTitle();
        expect(title).to.be.equal('WebdriverIO - Selenium 2.0 javascript bindings for nodejs');
    });
});
*/

import { expect } from 'chai';

describe('webdriver.io api page', () => {
  it('should be able to filter for commands', () => {
      browser.url('/');
      var title = browser.getTitle();
      expect(title).to.be.equal('WebdriverIO - Selenium 2.0 javascript bindings for nodejs');
  });
});
