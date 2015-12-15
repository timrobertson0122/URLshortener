var webdriverio = require('webdriverio');
var expect = require('chai').expect;
var shortener = require('../../routes/urlShortener');

describe('Url Shortener', function() {

	var client = {};

	before(function(done) {
		client = webdriverio.remote({ desiredCapabilities: {browserName: 'chrome'} });
		client.init(done);
	});

	after(function(done) {
		client.end(done);
	});

	it('displays the title', function(done) {
		client
			.url('http://localhost:3000')
			.getText('body', function(err, text) {
				expect(err).to.not.be.true;
				expect(text).to.equal('Welcome to Tim.ly - the URL Shortener :)');
			})
			.call(done);
	});
	
});
