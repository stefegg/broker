const WebSocket = require('ws');

// const readline = require('readline');

// var stdin = process.openStdin();

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

module.exports.clientListen = function() {
  const ws = new WebSocket('ws://127.0.0.1:8080');
  ws.on('open', function open() {
    // sends to everyone on connection
    ws.send(JSON.stringify({
      "Message" : "New Client Connected to Server"
    }));
  });
  // where the message is received 
  ws.on('message', function incoming(data) {
    console.log(data);
  })
};


