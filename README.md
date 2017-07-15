# Morning challenge - Build the Request module
This week in your project you will be making API calls from the backend. In the past few weeks you have been making API calls from the frontend with the XMLHttpRequest object and it's methods. Now that you are in the backend we would like you to use the Request module. This workshop is intended to familiarise you with this module.

### Time Required: 1 hour
  - 50 mins to complete the challenge in pairs
  - 10 minutes to regroup and talk over the solution

### Learning outcome
To become familiar with the Request module and the Node core [http module](https://nodejs.org/api/http.html).

### What is the Node Request module?
The Request is a very popular module that helps to make HTTP requests as simple as possible and it is built around the Node HTTP core module. [Here](http://stackabuse.com/the-node-js-request-module/) is a brilliant article on the request module.

### When would I need to use the request module?
Example 1 - I would like to GET my profile-photo.png from the database to display on my homepage.

Example 2 - I would like to use the Request module to make a HTTP request to the [TFL API](https://api.tfl.gov.uk/), to find out which busses go between London Bridge and Bethnal Green.

### Your challenge
Create a function called myRequest that has similar set of features to the Node request module.

The request module simply creates a wrapper around the Node core http module. Your task it to create your own request function that performs in the same way as the request module used in the app.js file in this repo. Hint: relate to your knowledge of streams and sending data in chunks.

To complete this challenge you will need to use the [`http.get`](https://nodejs.org/api/http.html#http_http_get_options_callback) method of the node core `http` module. 

### Start here!
1) Clone this repo & run `npm install`
2) Run the app.js file in your command line with the command `node app.js`
3) Open app.js and follow the instructions to create your own request function

### Bonus round
Can you alter your myRequest function to check which protocol the url is using (http or https) and make the suitable request. You will need to require in the `https` node core module. You can test this by using the `https://jsonplaceholder.typicode.com/users/1` url.
