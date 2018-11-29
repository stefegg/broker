const WebSocket = require('ws');

module.exports.clientUpload = function (file) {
    const ws = new WebSocket('ws://127.0.0.1:8080');
    ws.on('open', function open() {
        ws.send(`Would you like to download the file? ${file} y/n?`)
        ws.on('message', function incoming(data) {
            console.log(data);
        })
    })
};