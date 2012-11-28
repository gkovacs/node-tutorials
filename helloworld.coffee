express = require 'express'
http = require 'http'

app = express()
server = http.createServer(app)

app.get('/', (req, res) ->
  res.send('hello world')
)

server.listen(9537)
console.log('Server running on port ' + server.address().port)

