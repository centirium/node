/**
* copy.js - Pello Altadill
* Shows how to copy a Buffer
*/

var buffer = new Buffer('Please don\'t copy this');

var otherBuffer = new Buffer(5);
var biggerBuffer = new Buffer(512);

// copy(target, targetInit, sourceStart, sourceEnd)
buffer.copy(otherBuffer,0,0,10);
console.log(otherBuffer.toString()); // Pleas

buffer.copy(biggerBuffer,0,0,buffer.length);
// This shows 'Please don\'t copy this' + random
console.log(biggerBuffer.toString());

// This shows same content
console.log(biggerBuffer.slice(0,buffer.length).toString());
