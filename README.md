# URLshortener

We'd like you to create a URL shortening service.
- It should have a route where you can send a POST request with a URL body, which returns a short URL.
- When you send a GET request to the returned URL, it should redirect to the POSTed URL.
- We'd also like a simple frontend that can create and display shortened URLs without reloading the page.
- For simplicity, don't worry about persisting the URLs between restarts  (ie, we don't need it to talk to an external database).

- extract url shortening logic to a separate file that can be unit tested (make it generic)
- whatever is passed to module.exports to be available as a function
- require this file where needed
- header/redirect is part of the routing
- mocha and webdriver
