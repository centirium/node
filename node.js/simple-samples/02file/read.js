/**
* file/read.js - Pello Altadill
* Simple code that opens a file and reads its content
*/

var fs = require('fs');
var fileToRead = 'sampleText.txt';

// We open file in read mode: 'r'
fs.open(fileToRead,'r', function (err, file) {
  if (err) {
    console.log('Problem with: ' +fileToRead + ': ' + err);
    throw err;
  }
  console.log('1. Ok, '+ fileToRead +' file was opened');
  var readBuffer = new Buffer(2048);
  // read (fileDescriptor, buffer, offset, length, position)
  fs.read(file, readBuffer, 0, readBuffer.length, 0, function (err, bytes) {
    if (err) {
      console.log('Problem reading: ' +fileToRead + ': ' + err);
      throw err;
    }
    console.log('2. Readed:\n' + readBuffer.slice(0,bytes));
    console.log('3. Total: ' + bytes + ' bytes');
    fs.close(file, function (err) {
      if (err) { throw err; }
      console.log('4. Ok, file was closed.');
    })
  });
});

console.log('5. Check wether '+ fileToRead +' exists');
