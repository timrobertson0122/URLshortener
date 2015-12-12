var shorty = require('./shorty');

// these hold the mappings between short codes and longUrls
var longToShort = [];
exports.shortToLong = [];

// logic for creating a short url, to be unit tested

exports.createShortUrl = function(longUrl) {

        urlToShorten = addhttp(shorty.urlToShorten);
        exports.shortCode = createShortCode(urlToShorten);
};

function createShortCode(longUrl) {
    console.log("Creating short code for url " + longUrl);

    // Check if there is already a shortcode for the longUrl
    shortUrlCode = longToShort[longUrl];

    if (shortUrlCode == undefined) {
        console.log(longUrl + " has not already been shortened, so shortening it now.");
        shortUrlCode = randomString(5);
        console.log("Shortened " + longUrl + " to a shortcode of " + shortUrlCode);

        longToShort[longUrl] = shortUrlCode;
        exports.shortToLong[shortUrlCode] = longUrl;
    }

    return shortUrlCode;
};

function randomString(length) {
    var chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHUJKLMNOPQRSTUVWXYZ';
    var result = '';

    console.log("Generating random alphanumeric string of length " + length);
    for (var i = length; i > 0; --i) result += chars[Math.round(Math.random() * (chars.length - 1))];
    return result;
}


function addhttp(url) {
    console.log("Adding http:// prefix to " + url + " if it doesnt already have it.");

    if (!/^(f|ht)tps?:\/\//i.test(url)) {
        url = "http://" + url;
    }
    return url;
};
