"use strict";

const request = require('request');
const http = require('http');

function myRequest(url, cb){

  http.get(url, (response) => {
    response.setEncoding('utf8');

    let body = '';
    response.on('data', (data) => {
     body = data;
    });

    response.on('end', () => {
      cb(null, response, body)
    });

  }).on('error', (err) => {
    cb(err)
  });
}

// Helper
const testRequest = (module) => {
  module('http://jsonplaceholder.typicode.com/users/1', function (error, response, body) {
    console.log('error:', error);
    console.log('statusCode:', response && response.statusCode);
    console.log('body:', body);
  });
}

// request module test
testRequest(request)

// // myRequest module test
testRequest(myRequest)
