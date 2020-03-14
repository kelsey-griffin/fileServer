const net = require('net');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const connection = net.createConnection({
  // host: 'localhost', //connect to self
  host: 'localhost',
  port: 3000
});

connection.setEncoding('utf8');

connection.on('data', (data) => {
  console.log("SERVER replied: \n", data);
});

//request a file
rl.on('line', (input) => {
  connection.write(input);
});
