const WebSocket = require('ws');
var websocketStream = require('websocket-stream')

const server = new WebSocket.Server({
    port: 8080,
    clientTracking: true
}, function () {
    console.log("WebSocket Server now running on port 8080....");
});

server.on('connection', function connection(ws) {
        // console.log( server.clients );

    server.clients.forEach(function each(client) {
        if (client !== ws && client.readyState === WebSocket.OPEN
            ) {
            //sends to all clients who are listening but are not the newly connected client

            client.send('New client connected');
        }
    });
    ws.on('message', function incoming(data) {
        // Broadcast to everyone else.
        server.clients.forEach(function each(client) {
            if (client !== ws && client.readyState === WebSocket.OPEN) {
                client.send(data);

            }
        });
        //Sends to any client who connects
        ws.send('Connected to Websocket Server');
    });
});


// server.broadcast = function broadcast(data) {
//     server.clients.forEach(function each(client) {
//         if (client.readyState === WebSocket.OPEN) {
//             client.send(data);

//         }
//     });
// };

// function handle(stream, request) {
//     // `request` is the upgrade request sent by the client.
//     fs.createReadStream('bigdata.json').pipe(stream)
//   }