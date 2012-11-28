express = require 'express'
http = require 'http'

app = express()
server = http.createServer(app)

vartable={}
app.get('/', (req, res) ->
  varname = req.query['varname']
  if !varname?
    res.send(JSON.stringify(vartable))
    return
  if req.query['set']?
    vartable[varname] = req.query['set']
  res.send(vartable[varname])
)

server.listen(9537)
console.log("Server running on port #{server.address().port}")
