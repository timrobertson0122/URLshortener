var shortener = require('./urlShortener');
var express = require('express');
var router = express.Router();

/* POST create short url */
router.route('/').post(function(req, res, next) {

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
			// res.json({ shortUrl: baseUrl + shortener.shortCode });
	}
});

/* GET long url and redirect */
router.route('/:id').get(function(req, res, next) {

	var shortCode = req.params.id;

	console.log("Fetching URL indexed by " + shortCode);
	var theLongUrl = shortener.shortToLong[shortCode];

	console.log('Short code ' + shortCode + " refers to " + theLongUrl);
	console.log("redirecting to " + theLongUrl);
	res.writeHead(302, {'Location': theLongUrl});
	res.end();
});

module.exports = router;
