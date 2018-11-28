const WebSocket = require('ws');

const server = new WebSocket.Server({ port: 8080, clientTracking: true }, function(){
    console.log( "WebSocket Server now running on port 8080...." );
} );

// server.on('connection', function connection(ws) {
//     console.log( server.clients );
//     ws.on('message', function incoming(message) {
//       console.log('received: %s', message);
//     });
  
//     ws.send('something');
//   });

  server.on('connection', function connection(ws) {

    server.clients.forEach(function each(client) {
            if (client !== ws && client.readyState === WebSocket.OPEN) {
                client.send('New person connected');
    }
  });  
      ws.on('message', function incoming(data) {
          // Broadcast to everyone else.
          server.clients.forEach(function each(client) {
              if (client !== ws && client.readyState === WebSocket.OPEN) {
                  client.send(data);
        }
        });
        ws.send('Connected to Websocket Server');
    });
});
    
    
    server.broadcast = function broadcast(data) {
    server.clients.forEach(function each(client) {
        if (client.readyState === WebSocket.OPEN) {
        client.send(data);
        }
    });
    };