var fs = require('fs')

fs.readFile('number.txt', function(err, data) {
  var number = parseInt(data)
  console.log(number * number)
})
