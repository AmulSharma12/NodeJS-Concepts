//🚀 Creating own server in NodeJS.

//For any web application you need a web server that will handle the http requests for the web application.
//for example - IIS for asp.net web application Apache for php/java web application.
//NodeJS allows us to create our own web server that will handle the http requests asynchronously.
//NOTE:- You can run IIS/Apache to run NodeJS web application but it is recommended to use NodeJS web servers.

// ---------------------🚀  Creating Server using NodeJS 

// 💫 step 1 - require the http module.
const http = require('http');


// 💫 step 2 - The http.createServer() will includes request and response parameters which is supplied
//by nodejs.
//The request object can be used to get the information about the current http request.
//e.g  - url, request header, data 
const server = http.createServer((req, res)=>{
    res.end('response from the other side');
});


// 💫 step 3 - for that we have to listen the request as well 
server.listen(8000,'127.0.0.1', ()=>{
    console.log('listening to the port 8000');
})

