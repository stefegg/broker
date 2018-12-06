var through = require('through')

 data = `./lines.js`;
 through(function write(data) {
     this.emit('data', data)
     //this.pause() 
     console.log(data)
  },
  function end () { //optional
    this.emit('end')
  })