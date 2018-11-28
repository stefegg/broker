const WebSocket = require('ws');

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
    if (data == 'Would you like to download the file? y/n?'){
      const readline = require('readline');
      const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
        prompt: 'sup> '
      });
      rl.prompt();
    rl.on('line', (line) => {
      switch (line.trim().toLowerCase()) {
        case 'y':
        console.log('Download started');
        break;
        case 'n':
        console.log('Download nawt started');
        break;
        default: 
        console.log(`I do not understand ${line.trim().toLowerCase()} your loss.`);
        break;
      }
    })

  }
})}
