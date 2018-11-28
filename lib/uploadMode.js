const WebSocket = require('ws');

// const readline = require('readline');

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
//   });

  
module.exports.clientUpload = function() {
    const ws = new WebSocket('ws://127.0.0.1:8080');
    ws.on('open', function open() {
        ws.send('Would you like to download the file? y/n?'
        )
        ws.on('message', function incoming(data) {
            console.log(data);
          })
    })};