// Create a server using NodeJS.

// 1. Import http library/module
const http = require('http');

// 2. Create Server.
const server = http.createServer((req, res) => {
  // Here comes the request.
  console.log(req.url);

  res.write("Welcome to my application");

  if(req.url == '/product') {
    // Response ends
    return res.end('This is Product Page');
  } else if(req.url == '/contact') {
    return res.end('This is Contact Page');
  }

  // logging

  // Modifying the response
  res.end('Welcome to NodeJS Ninja Server');
});

// 3. Specify a port to listen to client's requests.
server.listen(3100, () => {
  console.log("Server is listening on port 3100");
});

// console.log("Server is listening on port 3100");