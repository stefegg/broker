#!/usr/bin/env node
const stream = require('stream');


const listener = require('../lib/listenMode.js');
const clientUpload = require('../lib/uploadMode.js');


// process.stdin.on('data', function(data) {
//     // const string = data.toString()
//     if (data.toString() === 'broker listen') {
//         listener.clientListen()
//     }
//         else if (string.indexOf('upload') > -1){
//             let fileName = data.toString().substring(string.lastIndexOf("=") + 1);
//             clientUpload.clientUpload(fileName)
//         }
//             else console.log('Wrong')
//         });
   
function cliInput() {
    if (process.argv[2] === 'listen') {
        listener.clientListen()
    } else if (process.argv[2] === 'upload') {
        let file = process.argv[3]
        let fileName = file.substring(file.lastIndexOf("=") + 1);
        
        clientUpload.clientUpload(fileName)
        // console.log(process.argv)
    } else console.log('Incorrect command, see readme')
}



cliInput();