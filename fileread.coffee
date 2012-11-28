fs = require 'fs'

fs.readFile('number.txt', (err, data) ->
  number = parseInt(data)
  console.log(number * number)
)
