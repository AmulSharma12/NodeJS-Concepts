//🚀 Routes in NodeJS

// 💫    requiring  the http module.
const http = require("http");

// 💫  creating server
const server = http.createServer((req, res) => {
  if (req.url == "/") res.end("response from the other side");
  else if (req.url == "/about") res.end("About page");
  else if (req.url == "/contact") res.end("Contact page");
  else {
    res.writeHead(404, { "Content-type": "text/html" });
    res.end("<h1> Page doesnot exist !</h1>");
  }
});

// 💫  for that we have to listen the request as well
server.listen(3000, "127.0.0.1", () => {
  console.log("listening to the port 3000");
});
