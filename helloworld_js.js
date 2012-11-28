var express = require('express')
var http = require('http')

var app = express()
var server = http.createServer(app)

app.get('/', function(req, res) {
  res.send('hello world')
})

server.listen(9537)
console.log('Server running on port ' + server.address().port)

