

// Dependencies
const url = require('url');
const handlers = require('../lib/handlers');
var StringDecoder = require('string_decoder').StringDecoder;
var helpers = require('../lib/helpers');

// createServer
module.exports = function createServer(req, res) {

  // parse url (returns an object)
  const parsedUrl = url.parse(req.url, true); // true: use query string module

  // get path from the url
  const path = parsedUrl.pathname;
  const trimmedPath = path.replace(/^\/+|\/+$/g, ''); // removes extra slashes...

  // Get the query string as an object
  const queryStringObject = parsedUrl.query;

  // Get the HTTP method
  const method = req.method.toLowerCase();

  // Get the headers as an object
  const headers = req.headers;

  // Get the payload,if any
  const decoder = new StringDecoder('utf-8');
  let buffer = '';

  req.on('data', data => {
    buffer += decoder.write(data);
  });

  req.on('end', () => {

    buffer += decoder.end();

    // Choose the handler, use notFound if not found
    const chosenHandler = handlers[trimmedPath] || handlers.notFound;

    // Construct the data object to send to the handler
    const data = {
      trimmedPath,
      queryStringObject,
      method,
      headers,
      payload: helpers.parseJsonToObject(buffer)
    };

    chosenHandler(data, (statusCode, payload) => {

      // use status code of the handler or default to 200
      const resultingStatusCode = typeof statusCode === 'number' ? statusCode : 200;

      // Use the payload returned from the handler, or set the default payload to an empty object
      const resultingPayload = typeof payload === 'object' ? payload : {};

      // Convert the payload to a string
      var payloadString = JSON.stringify(resultingPayload);

      // Return the response
      res.setHeader('Content-Type', 'application/json');
      res.writeHead(resultingStatusCode);
      res.end(payloadString);
      console.log(trimmedPath, resultingStatusCode);

    });

  });

};
