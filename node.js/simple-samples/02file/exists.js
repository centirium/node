/**
* file/exists.js - Pello Altadill
* Simple code that checks wether a given file exists
*/

var fs = require('fs');
var fileToCheck = 'exists.js';

fs.exists(fileToCheck, function (itExists) {
  if (itExists) {
    console.log(fileToCheck +' EXISTS');
  } else {
    console.log(fileToCheck + ' does NOT exist');
  }
});

console.log('Check wether '+ fileToCheck +' exists');
