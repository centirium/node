/**
* app.js - Pello Altadill
* Shows the use of Buffer for any kind of data
*/
// this fills buffer with random
var buffer = new Buffer(1024);

console.log('Buffer size: ' + buffer.length); // 1024

// Get content from position 0, will be a random byte
console.log('Buffer contents: ' + buffer[0]); // 8

var bufferText = new Buffer('This is data');
console.log('Buffer size: ' +  bufferText.length); // 12
console.log('Buffer contents in 0: ' + bufferText[0]); // random number
console.log('Buffer contents in 0: ' + bufferText.toString());

var bufferSpanish = new Buffer('España y olé', 'utf8');
console.log('Buffer size: ' +  bufferSpanish.length); // 14
console.log('Buffer content: ' + bufferSpanish.toString());
console.log('Buffer contents in 0: ' + bufferSpanish[0]); // random number

// init a buffer:
for (var i = 0; i < buffer.length;i++) {
  buffer[i] = 0;
}
