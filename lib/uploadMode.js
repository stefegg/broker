const WebSocket = require('ws');
const wss = require('./listenMode.js');
// const websocketStream = require('websocket-stream')
const rs = process.stdin


module.exports.clientUpload = function (fileUpload) {
    const ws = new WebSocket('ws://127.0.0.1:8080');
    // const wso = websocketStream(ws)
    ws.on('open', function open() {
        

        rs.pipe(wss.wss)

        ws.send(`Would you like to download the file? ${fileUpload} y/n?`)
        ws.on('message', function incoming(data) {
            console.log(data);
        })
    })
}