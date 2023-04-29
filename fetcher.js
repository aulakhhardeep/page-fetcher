const request = require('request');
const fs = require('fs');

request('http://www.example.edu', (error, response, body) => {
  console.log('error:', error);//Print the error if one occured
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
});

fs.writeFile('out.txt', 'This should get written for file', (err => {
  console.log("This printed after the file is written");
}))

console.log("Hello");