const WebSocket = require('ws');
const fs = require('fs');
const clientUpload = require ('./uploadMode.js')
const websocketStream = require('websocket-stream')
const ws = new WebSocket('ws://127.0.0.1:8080');

module.exports.wss = fs.createWriteStream('message.jpg');

module.exports.clientListen = function () {
  const wso = websocketStream(ws)
  ws.on('open', function open() {
    // sends to everyone on connection
    ws.send(JSON.stringify({
      "Message": "New Client Connected to Server"
    }));
  });
  // where the message is received 
  ws.on('message', function incoming(data) {
    console.log(data);
    if (typeof data === "string" && data.endsWith(`n?`)) {
      
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
          process.stdin.pipe(fs.createWriteStream('message2.jpg'))
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