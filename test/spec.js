var request = require('request');

var NodeAuth = function() {
  this.loginNavButton = element(by.id('loginNav'));

  this.loginNav = function() {
    this.loginNavButton.click();
  }

  this.loginHeading = element(by.id('heading'));

}

beforeEach(function() {
  browser.get('http://localhost:3000')
});

describe('Node authentication app', function() {

  it('returns status code 200 when we GET / (root path) to check connection', function(done) {
    request.get('http://localhost:3000/', function(err, res, body) {
      expect(res.statusCode).toEqual(200)
      done();
    });
  });

  it('navigates to the login page', function() {
    var nodeAuth = new NodeAuth();
    nodeAuth.loginNav();
    expect(nodeAuth.loginHeading.getText()).toBe('Log In');
  });
});