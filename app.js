"use strict";

const request = require('request');

const myRequest = () => {
  /*
  create your own request module here.
  It should take a url to make a http GET request, and a callback function with three arguments;
  1. error (String: if an error occurred),
  2. response(Object; includes the response & statusCode of the request),
  3. body (String; includes the body of the request)
  */
}

// Helper
const testRequest = (module) => {
  module('http://jsonplaceholder.typicode.com/users/1', function (error, response, body) {
    console.log('error:', error);
    console.log('statusCode:', response && response.statusCode);
    console.log('body:', body);
  });
};

// request module test
testRequest(request);

// // myRequest module test
testRequest(myRequest);
