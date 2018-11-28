#!/usr/bin/env node
const clientListen = require('../client.js')

function timeOut() {
    if (process.argv[2] == 'upload'){
    } else if (process.argv[2] == 'listen'){
        clientListen.clientListen()
    } else if (process.argv[2] == 'show'){
    } else {
      console.log('Invalid command, see documentation for correct usage')
    }
    
    }
    
    timeOut();