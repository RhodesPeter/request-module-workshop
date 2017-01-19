# Request module - morning challenge
Time Required: 1 hour

### What is the Node request module?

The [request module](https://github.com/request/request) helps to make HTTP requests as simple as possible. The module preforms a similar task to the Node http and https core module but it makes the process much simpler. [Here](http://stackabuse.com/the-node-js-request-module/) is a brilliant article on the request module. 

### What is a HTTP request? 

HTTP (Hypertext Transfer Protocol) requests are used whenever you want to fetch a file from a server, this could be any information on a database. 
HTTP is a request/response protocol, which means your computer sends a request for some data from a server (GET request) and will receive some data in response.

### When would I need to use the request module? 

Example 1 - I would like to GET my profile-photo.png from the database to display on my homepage. 

Example 2 - I would like to use the request module to make a HTTP request to the [TFL API](https://api.tfl.gov.uk/), to find out which busses go between London Brige and Bethnal Green. 


# Your challenge 
Build the Node request module from scratch.

The request module simple creates a wrapper around the Node core http and https modules. Your task it to create this wrapper into a function called request. Your function will use the http module and specifically the http.get method. (THIS ALL NEEDS FACT CHECKING!)

1. Create a node server
2. Build a function called request that has two method:
   
   - GET <br>
   This method should return some data (html, an image, JSON Object) from a website and display it in your browser.
   Your request method should take an object as an argument with 3 properties: url, method and payload (optional).
     
   - POST <br>
   This method should...
   
<br><br><br><br>
NOTES FOR PETER
To note - you need to put some thought into the notion of using technology that has lots of dependancies. The requst module has XXX number of dependancies which can bring with it lots of different issues. 
Stretch goal - make a wrapper around https (as opposed to http).
**DON'T FORGET TO RUN THIS README THROUGH A SPELL CHECKER**
