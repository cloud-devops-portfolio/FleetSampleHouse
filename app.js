const http = require('http');
const os = require('os');
const port = 3000;

http.createServer((req, res) => {
  if (req.url === '/health') {
    res.writeHead(200); res.end('healthy');
  } else {
    res.writeHead(200);
    res.end(`Hello from ${os.hostname()}! FleetSampleHouse v5.13 - CI/CD Auto Deployed!\n`);
  }
}).listen(port);
console.log(`App running on port ${port}`);
