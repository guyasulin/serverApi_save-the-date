const http = require('http');
const port = 3000;
const app = require('./app');

const server = http.createServer(app)
const hostname = '0.0.0.0';

server.listen(port);

// const server = http.createServer((req, res) => {
//   res.statusCode= 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Zeet node')
// });

// server.listen(port, hostname, () => {
//   console.log(`server runinng  at http://${hostname}:${port}/`);
// })
