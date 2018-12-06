const WebSocket = require('ws');
const fs = require('fs');
const clientUpload = require ('./uploadMode.js')

module.exports.wss = fs.createWriteStream('message.jpg');

// var Writable = require('stream').Writable;
// var writestr = Writable();
// writestr._write = function (chunk, enc, next) {
//     console.dir(chunk);
//     next();
// };

// const y = process.stdin.pipe(writestr);

module.exports.clientListen = function () {
  const ws = new WebSocket('ws://127.0.0.1:8080');
  ws.on('open', function open() {
    // sends to everyone on connection
    ws.send(JSON.stringify({
      "Message": "New Client Connected to Server"
    }));
  });
  // where the message is received 
  ws.on('message', function incoming(data) {
    console.log(data);
    if (data.endsWith(`n?`)) {
      
      console.log(clientUpload)
      const readline = require('readline');
      const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
        prompt: 'prompt> '
      });
      rl.prompt();
      rl.on('line', (line) => {
        switch (line.trim().toLowerCase()) {
          case 'y':
          // console.log(clientUpload.holder)
             wss = fs.createWriteStream('message.txt');
            // wss.write(JSON.stringify(clientUpload.holder));

            // setTimeout(function () {
            //     wss.end('boop\n');
            // }, 1000);
            // wss.write(JSON.stringify(hold.holder))
            // console.log(writestr)
            console.log('Download started');
            break;
          case 'n':
            console.log('Download not started');
            break;
          default:
            console.log(`${line.trim().toLowerCase()} is not a valid response, download aborted`);
            break;
        }
      })

    }
  })
}