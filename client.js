const WebSocket = require('ws');

const ws = new WebSocket('ws://127.0.0.1:8080');

module.exports.clientListen = function clientListen() {ws.on('open', function open() {
  ws.send(JSON.stringify({ 'message':'nothing'}));
});

ws.on('message', function incoming(data) {
  console.log(data);
})};