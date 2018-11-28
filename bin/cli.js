#!/usr/bin/env node


const listener = require('../lib/listenMode.js');
const clientUpload = require('../lib/uploadMode.js');

function cliInput() {
    if (process.argv[2] === 'listen') {
        listener.clientListen()
        } else if (process.argv[2] === 'upload') {
        clientUpload.clientUpload()
        } else console.log('gfy')
    }



cliInput();