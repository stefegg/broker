const WebSocket = require('ws');
const fs = require('fs');

// const Readable = require('stream').Readable;

module.exports.holder = holder = [];

module.exports.clientUpload = function (fileUpload) {
    const ws = new WebSocket('ws://127.0.0.1:8080');
    ws.on('open', function open() {
        var stream = fs.createReadStream(fileUpload);
        stream.push(fileUpload);
        let x = stream.pipe(process.stdin);
        holder.push(x)
        // console.log(holder)
        // console.log(process.stdout, '!!!!!', process.stdin)
        // process.stdin.on('readable', function (){
        //     var buf = process.stdin.read();
        //     console.dir(buf.toString())
        ws.send(`Would you like to download the file? ${fileUpload} y/n?`)
        ws.on('message', function incoming(data) {
            console.log(data);
        })
    })
}
// )};

// IN == WRITE && READ == OUT ???