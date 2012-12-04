var express = require('express')
var http = require('http')

var app = express()
var server = http.createServer(app)

var vartable={}
app.get('/', function(req, res) {
  var varname = req.query['varname']
  if (varname == null) {
    res.send(JSON.stringify(vartable))
    return
  } if (req.query['set'] != null) {
    vartable[varname] = req.query['set']
  }
  res.send(vartable[varname])
})

server.listen(9537)
console.log('Server running on port ' + server.address().port)

