const WebSocket = require('ws');
// const wss = require('./listenMode.js');
const websocket = require('websocket-stream')
const wso = websocket('ws://127.0.0.1:8080')

module.exports.clientUpload = function (fileUpload) {
    const ws = new WebSocket('ws://127.0.0.1:8080');
    ws.on('open', function open() {
     const rs = process.stdin   
     rs.pipe(wso)
    //  console.log(wso)
    //  ws._receiver._writableState.highWaterMark = 17500
    //  console.log(ws._receiver._writableState.highWaterMark)
        
            ws.send(`Would you like to download the file? ${fileUpload} y/n?`)
            ws.on('message', function incoming(data) {
                console.log(data);
            })
        })
    }