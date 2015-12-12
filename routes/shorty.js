var shortener = require('./urlShortener');
var express = require('express');
var router = express.Router();

/* POST create short url */
router.post('/', function(req, res, next) {

	exports.urlToShorten = req.body.urlToShorten;
	var baseUrl = 'http://' + req.app.get('hostname') + '/';

	if (!exports.urlToShorten) {
			console.log('Request did not contain a url to shorten, please provide urlToShorten');
			res.render('short', { message: 'Please provide a valid URL to shorten' });
	} else {

			console.log("Request to shorten " + exports.urlToShorten);

			shortener.createShortUrl();
			res.setHeader('Content-Type', 'text/html');
			res.statusCode = 200;
			res.render('short', { shortUrl: baseUrl + shortener.shortCode });
	}
});

/* GET long url and redirect */
router.get('/:id', function(req, res, next) {

	var shortCode = req.path.substring(1);

	console.log("Fetching URL indexed by " + shortCode);
	var theLongUrl = shortToLong[shortCode];

	console.log('Short code ' + shortCode + " refers to " + theLongUrl);
	console.log("redirecting to " + theLongUrl);
	res.redirect(302, {'Location': theLongUrl});
	res.end();
});

module.exports = router;
