const net = require('net');
const server = net.createServer();
const fs = require('fs');

server.on('connection', (c) => {
  console.log("Someones Connected!");
  c.setEncoding('utf8');
  c.on('data', data => {
    const path = `./myFiles/${data}`;
    
    fs.readFile(path, 'utf8', (err, content) => {
      c.write(content);
    });
  });
});


console.log("Server is on...");
server.listen(3000);