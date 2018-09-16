const http = require('http')

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.write('Hello World')
  }
  if (req.url === '/api/courses') {
    res.write(JSON.stringify([1, 2, 3]))
  }
  res.end()
})

const port = 3000

server.listen(port)
console.log(`listening on ${port}`)
