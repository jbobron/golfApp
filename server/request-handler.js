// var path = require('path');
var urlParser = require('url');
// var archive = require('../helpers/archive-helpers');
// var httpHelpers = require('./http-helpers.js');
// var fs = require('fs');

// require more modules/folders here!

var actions = {
  "GET": function(request, response) {
    // var parts = request.url
    // console.log(parts)
    // if ( parts === '/' ) {
    //   parts = '/index.html';
    // } else {
    //   parts = parts.slice(1);
    //   console.log(parts) // will change archive.siteAsstes or something
    // }
    // httpHelpers.serveAssets(response, parts, function(){
    //   //serve loading page
    //   // httpHelpers.sendRedirect(response, '/loading.html')
    // });
  },

  "POST": function(request, response) {
    // httpHelpers.collectData(request, function(url){
    //   var url = url.split('=')[1]
    // // extract url data from request
    //   archive.readListOfUrls(function(data){
    //     archive.isUrlInList(data, url, function(url, isInList){
    //       console.log(url, "is in List equals: ", isInList)
    //       archive.downloadUrl(url, function(data){

    //         httpHelpers.serveAssets(response, url)
    //       })
    //     });
    //   });
    // });
    // check if the URL is in sites.txt
      // if sites is in sites.txt
        // serve index.html for that site to the client
      // else
        // add site to sites.txt
        // download url and store index.html in archive
        // serve loadpage.html to client
        // when page is downloaded
          // serve page
  }
};



// exports.handleRequest = function (req, res) {
//   var statusCode;

//   var action = actions[req.method];
//   // if we have a registered action
//   if ( action ) {
//     action(req, res);
//   } else {
//     httpHelpers.send404(res);
//   }
// };
