var request = require('request');

request('https://jsonplaceholder.typicode.com/users/1', function (error, response, body) {
  console.log('error:', error); // log the error if one occurred
  console.log('statusCode:', response && response.statusCode); // log the response status code if a response was received
  console.log('body:', body); // log the body of the request.
});

/* Comment out the code above this line and create your own request function
which uses the Node core HTTP module and it's methods to console.log the same
values as request function above. */

function request(url){
  // create your function here
}
