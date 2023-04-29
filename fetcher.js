const request = require('request');
const fs = require('fs');
let urlOfWebsite = process.argv[2];
let localPath = process.argv[3];

request(urlOfWebsite, (error, response, body) => {
  if(error) {
    console.log('error:', error);//Print the error if one occured
    return; //stop running
  }
  fs.writeFile(localPath, body, (error) => {
    if (error) {
      console.log('error: ', error);
      return;
    }
    console.log("Downloaded and saved 3261 bytes to ./index.html");
  });
 
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
});



