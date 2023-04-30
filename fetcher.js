//This application downloads a file from a URL and store at a local path provided.
//URl and path of file are provided as command line arguments
//Example: node.fetcher.js http://www.example.edu/ ./index.html

const request = require('request');
const fs = require('fs');
let args = process.argv.slice(2);
let urlOfWebsite = args[0];
let fileName = args[1];

if (!urlOfWebsite || !fileName) {
  console.log(`Please enter the website and fileName as http://www.example.edu/ ./index.html from the command line.`);
}

request(urlOfWebsite, (error, response, body) => {
  if (error) {
    console.log('An error occured:', error);//Print the error if one occured
    return; //stop running
  }
  fs.writeFile(fileName, body, (error) => {
    if (error) {
      console.log('An error occurred while writing the file: ', error);
      return;
    }
    fs.stat(fileName, (error, stats) => {
      if (error) {
        console.log(`An error occurred while reading the file size of ${fileName}`);
      }
      console.log(`Downloaded and saved ${stats.size} bytes to ${fileName}`);
    });
    
  });
 
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
});



