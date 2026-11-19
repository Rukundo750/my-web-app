const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/plain');

  if (req.url === '/about') {
  res.statusCode = 200;
      res.end('About Page\n');
  } else if (req.url === '/login') {
    res.statusCode = 200;
    res.end('Login Page\n');
  } else if (req.url === '/register') {
    res.statusCode = 200;
    res.end('Register Page\n');
  } else {
    res.statusCode = 200;
    res.end('Hello, DevOps World!\n');
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});