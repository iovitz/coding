import http from 'http'

const app = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' })
  res.end('Hello, world')
}).listen(8080, '0.0.0.0')
