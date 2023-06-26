const http = require('node:http');


const hostname = '127.0.0.1';
const port = 3001;

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, Galvanize!\n');
});

server.listen(port, hostname, () => {
  console.log(`Server is runnning on ${hostname}:${port}`);
}); 