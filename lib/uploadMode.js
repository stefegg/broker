const WebSocket = require('ws');
const fs = require('fs');
const Readable = require('stream').Readable;
const wss = require('./listenMode.js');

// console.log(process.stdin);


module.exports.clientUpload = function (fileUpload) {
    const ws = new WebSocket('ws://127.0.0.1:8080');
    ws.on('open', function open() {
     const rs = process.stdin   // const rs = new fs.createReadStream(fileUpload)
        // const rs = new Readable()
        // rs.push(fileUpload)
        // rs.push(null)
rs.pipe(wss.wss)

        
            ws.send(`Would you like to download the file? ${fileUpload} y/n?`)
            ws.on('message', function incoming(data) {
                console.log(data);
            })
        })
    }