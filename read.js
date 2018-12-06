var Readable = require('stream').Readable;
const fs = require('fs');
const wss = require('./lib/listenMode.js');

let lines = `./lines.js`;
var rs = new Readable(lines);
rs.push(lines);
rs.push(null);

rs.pipe(wss.wss);