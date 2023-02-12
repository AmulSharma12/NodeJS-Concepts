//🚀 Routes in NodeJS

// 💫    requiring  the http module.
const http = require("http");
const fs = require("fs");

// 💫  creating server
const server = http.createServer((req, res) => {
  //reading from the json file and giving response
  const data = fs.readFileSync(`${__dirname}/F1_UserApi.json`, "utf-8");
  const objectData = JSON.parse(data);

  if (req.url == "/") res.end("response from the other side");
  else if (req.url == "/about") res.end("About page");
  else if (req.url == "/contact") res.end("Contact page");
  else if (req.url == "/userapi") {
    res.writeHead(200, { "content-type": "application/json" });
    res.end(objectData[0].name);
    console.log("readed");
  } else {
    res.writeHead(404, { "content-type": "text/html" });
    res.end("<h1> Page doesnot exist !</h1>");
  }
});

// 💫  for that we have to listen the request as well
server.listen(3000, "127.0.0.1", () => {
  console.log("listening to the port 3000");
});
