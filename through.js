var websocket = require('websocket-stream')
var ws = websocket('ws://127.0.0.1:8080')
process.stdin.pipe(ws)
ws.pipe(process.stdout)